import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';
import { Link, withRouter } from 'react-router-dom';

export default class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startLoading()
    this.props.fetchPins()
    .then(() => setTimeout((this.props.stopLoading), 5000))
  }

  // handleClick() {
  //   <Link to='/api/pins/${this.props.match.params.id}'/>
  // }

  render() {
    const { currentUser, openModal, pins, fetchPins, modal } = this.props;

    if (modal !== 'pinboard') {
    return (
      <div className="test">
        <Masonry
          className="masonry-pins"
          elementType={'ul'}
        >
          {pins.map((pin) => (
            <PinIndexItem
              pin={pin}
              key={pin.id}
              photo={pin.photoUrl}
              fetchPins={fetchPins}
              currentUser={currentUser}
              openModal={openModal}
            />
          ))}
        </Masonry>
        <div className='plus'>
          <Link to="/pins">
            <i className="fas fa-plus"></i>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
  }
}

