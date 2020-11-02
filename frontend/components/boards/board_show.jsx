import React from 'react';
import {Link} from 'react-router-dom';
import LoadingIcon from '../loading/loading';
import {Redirect} from 'react-router-dom';
import BoardItem from './board_item';

export default class BoardShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      fetched: false,
      openPin: false, 
      openPinId: null
    }

  }

  // handleClick(e) {
  //   let pin = (e.currentTarget);
  //   const pinId = (pin.getAttribute('value'))
  //   if (pinId) {
  //   this.setState({openPin: true, openPinId: pinId})
  // }
  // }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchPins().then(() => this.setState({fetched: true, loading: false}))
  }

  render() {
    const {board, currentUser, pins} = this.props;
    
    if (this.state.loading) {
      return <LoadingIcon />;
    }

    let pinArr = [];
    if (this.state.fetched == true && board.pinIds.length > 0) {
      board.pinIds.map(pinId => {
      pinArr.push(pins[pinId])})
    }

  //   if (this.state.openPin == true && this.state.openPinId) {
  //   return <Redirect to={`/pins/${this.state.openPinId}`}/>
  // }

    if (pinArr.length > 0) {
      return (
      <div id='board-show-wrapper'>
        <div id='board-show-header'>
          <h1>{board.title}</h1>
        </div>
        <ul id='board-list-wrap'>
          {pinArr.map((pin) => (
            <BoardItem
              pin={pin}
              key={pin.id}
              />
          ))}
          </ul>
          <Link className="back-arrow-board" to={`/users/${currentUser.id}`}>
            <i className="fas fa-arrow-left"></i>
          </Link>
      </div>
    )
    } else {
      <p>this board has no pins yet!</p>
    }
  }
}