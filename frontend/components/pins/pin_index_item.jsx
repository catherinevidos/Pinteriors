import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';


// import PinShowContainer from '../pins/pin_show_container.js';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

handleClick(e) {
  e.preventDefault();
  this.props.openModal({modal: 'pinboard', pinId: this.props.pin.id})
}

  render() {
    const { pin, openModal } = this.props;

    return (
      <Link to={`pins/${pin.id}`}>
        {/* <button
          className='pin-index-save'
          onClick={this.handleClick}
        >
        Save
        </button> */}
        <img className="masonry-pin-item" src={pin.photoUrl} />
      </Link>
    );
  }
}

export default withRouter(PinIndexItem);
