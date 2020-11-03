import React from 'react';
import {Link} from 'react-router-dom';

export default class RecentPin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div className="create-board-container">
          <div onClick={this.props.closeModal} className="close-x-board">
            <i className="fas fa-times"></i>
          </div>
          <div className="modal-pinboard-text">
            <h1>Saved to {this.props.boards[this.props.boardId].title}</h1>
          </div>
          <div className='pin-show-image'>
            <img className='pin-show-item' src={this.props.pin.photoUrl}></img>
          </div>
          <Link to={`/boards/${this.props.boardId}`}>See it now</Link>
        </div>
      </>
    )}
}