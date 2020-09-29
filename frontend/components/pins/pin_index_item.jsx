import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';

// import PinShowContainer from '../pins/pin_show_container.js';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pin } = this.props;

    return (
        <img className="masonry-pin-item" src={pin.photoUrl} />
    );
  }
}

export default PinIndexItem;
