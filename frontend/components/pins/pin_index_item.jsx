import React from 'react';
import { withRouter } from 'react-router-dom';

// import PinShowContainer from '../pins/pin_show_container.js';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pin } = this.props;
    return(
      <div>
        <img src={pin.photoUrl}/>
      </div>
    )
  }
}

export default PinIndexItem;
