import React from 'react';
import PinIndexItem from './pin_index_item';
import Masonry from 'react-masonry-css';
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading';
import Navbar from '../navbar/navbar';

export default class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      update: true
    }
  }

  componentDidMount() {
    this.props.fetchPins();
    setTimeout(this.setState({loading: false}), 10000);
  }


  // handleClick() {
  //   <Link to='/api/pins/${this.props.match.params.id}'/>
  // }

  render() {
    if (this.state.loading) {
      return <LoadingIcon />;
    }
    if (this.props.pins.length > 0) {
    return (
      <>
        <Masonry
          className="masonry-pins"
          columnClassName="masonry-pins_column"
          breakpointCols={5}
        >
          {this.props.pins.map((pin) => (
            <PinIndexItem
              pin={pin}
              key={pin.id}
              photo={pin.photoUrl}
              fetchPins={this.props.fetchPins}
              currentUser={this.props.currentUser}
              openModal={this.props.openModal}
            />
          ))}
        </Masonry>
        <div className='plus'>
          <Link to="/pins">
            <i className="fas fa-plus"></i>
          </Link>
      </div>
    </>
    );
  } else {
    return null;
  }
  }
}

