import React from 'react';
import PinIndexSearchItem from './pin_index_item';
import StackGrid, { transitions } from "react-stack-grid";
import { Link, withRouter } from 'react-router-dom';
import LoadingIcon from '../loading/loading';


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
   const timer = setTimeout(() => {
     this.setState({loading: false}) 
    }, 4000);
  }

  render() {
    const { scaleDown } = transitions;
    
    if (this.state.loading) {
      return <LoadingIcon />;
    }
    if (this.props.searchPins !== undefined && this.props.searchPins.length > 0) {
    return (
      <div className="splash-page-wrapper">
        <StackGrid
          className="masonry-pins"
          columnWidth={250}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          monitorImagesLoaded={true}
        >
          {this.props.searchPins.map((pin) => (
            <PinIndexSearchItem
              pin={pin}
              key={pin.id}
              photo={pin.photoUrl}
              fetchPins={this.props.fetchPins}
              currentUser={this.props.currentUser}
              openModal={this.props.openModal}
            />
          ))}
         </StackGrid>
        <div className='plus'>
          <Link to="/pins">
            <i className="fas fa-plus"></i>
          </Link>
      </div>
    </div>
    );
  } else {
    return (
      <>
        <br></br>
        <p>No pins match this search</p>
      </>
    )
  }
  }
}

