import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class PinIndexSearchItem extends React.Component {
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
        <img className="masonry-pin-item" src={pin.photoUrl} />
        <p className='pin-index-title'>{pin.title}</p>
      </Link>
    );
  }
}

export default withRouter(PinIndexSearchItem);
