import React from 'react';
import {Link} from 'react-router-dom';

export default class PinBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.pinToBoard(boardPin).then(
      this.setState(() => {
        message: true;
      }),
    );
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const { currentUser, boards } = this.props;


    const currentUserBoards = boards.filter(board => (board.userId === currentUser.id))

      const success =
        this.state.message === true ? (
          <h3 className="pin-board-success">
            Successfully saved to your board!
          </h3>
        ) : null;

    
    if (boards.length > 0) {
    return (
      <>
        <div className="pinboard-container">
          <div onClick={this.props.closeModal} className="close-x">
            <i className="fas fa-times"></i>
          </div>
          <div className="modal-pinboard-text">
            <h1>Choose a board</h1>
          </div>
          <ul className="modal-pinboard-list">
            {currentUserBoards.map((board) => (
              <li key={board.id}>
                {board.title}
                  <button
                    className="pinboard-button"
                    onClick={this.handleClick}
                  >
                    Save
                  </button>
              </li>
            ))}
          </ul>
          {success}
          <Link className="back-arrow-modal" to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
      </>
    );} else {
      return null;
    }
  }
}