import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';
import { withRouter } from 'react-router-dom';

export default class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  // handleClick() {
  //   <Link to='/api/pins/${this.props.match.params.id}'/>
  // }

  render() {
    const { currentUser, openModal, pins, fetchPins } = this.props;
    return (
      <div className="test">
        <Masonry
          className="masonry-pins"
          elementType={'ul'}
          // onClick={this.handleClick}
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

