import React from 'react';
import {Link} from 'react-router-dom';
import DropdownContainer from '../dropdown/dropdown_container';
import {withRouter} from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      success: '',
      ask: '',
      deleted: false
    }
    this.deletePin = this.deletePin.bind(this);
    this.deleteForSure = this.deleteForSure.bind(this);
    this.checkPin = this.checkPin.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchPins();
    this.props.fetchPin(this.props.match.params.pinId);
    this.props.clearPinErrors();
  }

  deletePin(e) {
    // e.preventDefault();
    if (this.state.ask === 'Are you sure?') {
      this.deleteForSure(e)
    } else {
      this.setState({ask: 'Are you sure?'})
    }
  }

  deleteForSure(e) {
  // e.preventDefault();
  this.props.deletePin(this.props.pin.id).then(() => this.checkPin())
  }

  checkPin() {
  if (this.props.errors.length === 0) {
    this.props.history.push('/');
  } else {
    this.setState({ask: ''})
  }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="session-errors" 
              key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    const { pins, pin, currentUser, board } = this.props;

    if (!pin) return null;

    if (this.state.success === 'Your pin was successfully deleted!')
    return (
    <p>{this.state.success}</p> 
    )

    return (
      <div className="arrow-wrapper">
        <div className="pin-show-wrapper">
          <div className="pin-show-container">
            <div className="pin-show-text">
              <div id='dropdown-pin-show'><DropdownContainer pinId={pin.id}/></div>
              <div id='pin-show-details'>
                {this.renderErrors()}
                {pin.sourceLink != "undefined" ? <a href={`http://${pin.sourceLink}`} target='_blank'>{pin.sourceLink}</a> : null}
                {pin.title != "undefined" ? <h1>{pin.title}</h1> : null}
                {pin.description != "undefined" ? <p>{pin.description}</p> : null}
              </div>
            </div>
            <div className="pin-show-image">
              <img className="pin-show-item" src={pin.photoUrl} />
            </div>
          </div>
        </div>
          <div className='pin-show-button-wrapper'>
            <Link to='/'>
              <div className='plus-board'>
                <i className="fas fa-arrow-left"></i>
              </div>
            </Link>
            {pin.title != "undefined" ? <button className='plus-board' onClick={this.deletePin}>
              <i className='fas fa-trash-alt'></i>
            </button>
            : null}
            {this.state.ask === 'Are you sure?' ? <p className='are-you-sure'>{this.state.ask}</p> : null}
          </div>
      </div>
    );
   

  }
}

export default withRouter(PinShow);