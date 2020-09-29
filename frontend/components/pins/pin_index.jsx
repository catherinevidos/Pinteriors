import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';

export default class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  render() {
    const { currentUser, openModal, pins, fetchPins } = this.props;
    return (
      <div className="test">
        <Masonry
          className="masonry-pins"
          elementType={'ul'}
          onClick={this.handleClick}
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
      </div>
    );
  }
}
