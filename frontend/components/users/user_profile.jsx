import React from 'react';
import { Link } from 'react-router-dom';
import BoardShowContainer from '../boards/board_show_container';
import LoadingIcon from '../loading/loading';
import {Redirect} from 'react-router-dom';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: '',
      loading: true,
      openBoard: false,
      openBoardId: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this)
  }

componentDidMount() {
  this.props.fetchBoards()
  this.props.fetchPins().then(() => this.setState({pins: 'fetched', loading: false}))

}

handleButton(e) {
  let board = (e.currentTarget);
  const boardId = (board.getAttribute('value'))
  if (boardId) {
    this.setState({openBoard: true, openBoardId: boardId})
  }
}

handleClick() {
  this.props.openModal({modal: 'createboard', currentUser: this.props.currentUser})
}

componentDidUpdate(prevProps) {
  if (prevProps.boards.length != this.props.boards.length) {
    this.props.fetchBoards();
  }
}


render() {
  const { currentUser, boards, pins } = this.props;

   if (this.state.loading) {
      return <LoadingIcon />;
    }

  if (this.state.openBoard == true && this.state.openBoardId) {
    return <Redirect to={`/boards/${this.state.openBoardId}`}/>
  }

  const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))
  
  
  if (boards.length > 0 && this.state.pins === 'fetched') {
  return (
    <ul id='board-list'>
        {currentUserBoards.map((board, idx) => {
            let pinArr;
            let allPins;
            let imageTag = 
              <div id='pin-image-wrapper1'>
                <div className='pin-noimg'></div>
              </div>
            if (board.pinIds.length > 0) {
              pinArr = board.pinIds.map(pinId => {
              return pins[pinId]
            })
            if (pinArr.length > 0) {
              allPins = pinArr.map((pin, idx) => {
                if (idx < 3) {
                  return <img id='pin-image1' src={pin.photoUrl}/>
                } 
              })
              imageTag = 
              <div id='pin-image-wrapper'>
                {allPins}
              </div>
            }
          }
          return (
          <div value={board.id} id='board-show-list' onClick={this.handleButton}>
              {imageTag}
            <div id='board-text'>
              <li>{board.title}</li>
              <p>{board.pinIds.length} Pins</p>
            </div>
            <div>
            <button
              className="plus"
               onClick={this.handleClick}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
          </div>
          )
        })}
    </ul> 
  )} else {
    return (
    <p>You don't have any boards yet!</p>
    );
  }
  }
}