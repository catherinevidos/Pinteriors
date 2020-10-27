import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-component';
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading';

export default class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchPins()
    .then(() => this.setState({loading: false}))
  }

  // handleClick() {
  //   <Link to='/api/pins/${this.props.match.params.id}'/>
  // }

  render() {
    const { currentUser, openModal, pins, fetchPins, modal } = this.props;

    if (this.state.loading) {
      return <LoadingIcon />;
    }
    
    if (modal === null) {
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

