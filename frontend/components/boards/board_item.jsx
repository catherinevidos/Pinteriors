import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';



// import PinShowContainer from '../pins/pin_show_container.js';

class BoardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pin } = this.props;

    return (
      <Link to={`/pins/${pin.id}`}>
          <img className="pin-item" src={pin.photoUrl}/>
          <p id='pin-title-board'>{pin.title}</p>
      </Link>
    );
  }
}

export default withRouter(BoardItem);