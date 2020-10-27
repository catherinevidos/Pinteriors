import React from 'react';
import {Link} from 'react-router-dom';
import DropdownContainer from '../dropdown/dropdown_container';

export default class PinShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchPin(this.props.match.params.pinId);
  }

  render(){
    const { pins, pin, currentUser, board } = this.props;
    if (!pin) return null;
    return (
      <div className="arrow-wrapper">
        <div className="pin-show-wrapper">
          <div className="pin-show-container">
            <div className="pin-show-text">
              <div id='dropdown-pin-show'><DropdownContainer /></div>
              <div id='pin-show-details'>
                <a href={pin.sourceLink}>{pin.sourceLink}</a>
                <h1>{pin.title}</h1>
                <p>{pin.description}</p>
              </div>
            </div>
            <div className="pin-show-image">
              <img className="pin-show-item" src={pin.photoUrl} />
            </div>
          </div>
        </div>
        {/* <div className="back-arrow"> */}
        <Link className="back-arrow" to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
        {/* </div> */}
      </div>
    );
   

  }
}