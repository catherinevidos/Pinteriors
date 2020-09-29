import React from 'react';

export default class PinShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId);
  }

  render(){
    const { pins, pin, currentUser } = this.props;
    if (!pin) return null;
    return (
      <div>
        <div className="pin-show-text">
          <a href={pin.sourceLink}>{pin.sourceLink}</a>
          <h1>{pin.title}</h1>
          <p>{pin.description}</p>
        </div>
        <div className="pin-show-image">
          <img className="pin-show-item" src={pin.photoUrl} />
        </div>
      </div>
    );
   

  }
}