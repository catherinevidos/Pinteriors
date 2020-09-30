import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

// import PinShowContainer from '../pins/pin_show_container.js';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pin } = this.props;

    return (
      <Link to={`pins/${pin.id}`}>
        <img className="masonry-pin-item" src={pin.photoUrl}/>
      </Link>
    );
  }
}

export default withRouter(PinIndexItem);
