import React from 'react';
import {Link} from 'react-router-dom';
import DropdownContainer from '../dropdown/dropdown_container';
import {withRouter} from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchPins();
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
              <div id='dropdown-pin-show'><DropdownContainer pinId={pin.id}/></div>
              <div id='pin-show-details'>
                {pin.sourceLink != "undefined" ? <a href={pin.sourceLink}>{pin.sourceLink}</a> : null}
                <h1>{pin.title}</h1>
                {pin.description != "undefined" ? <p>{pin.description}</p> : null}
              </div>
            </div>
            <div className="pin-show-image">
              <img className="pin-show-item" src={pin.photoUrl} />
            </div>
          </div>
        </div>
        {/* <div className="back-arrow"> */}
        <Link className="back-arrow" to='/'>
          <i className="fas fa-arrow-left"></i>
        </Link>
        {/* </div> */}
      </div>
    );
   

  }
}

export default withRouter(PinShow);