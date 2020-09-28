import React from 'react';
import PinIndexItem from './pin_index_item';

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
      <div className="pin-index-container">
        <ul className="pin-index-ul">
          {pins.map(pin => 
            <PinIndexItem
              pin={pin}
              key={pin.id}
              photo={pin.photoUrl}
              fetchPins={fetchPins}
              currentUser={currentUser}
              openModal={openModal}
            />
          )}
        </ul>
      </div>
    );
  }
}
