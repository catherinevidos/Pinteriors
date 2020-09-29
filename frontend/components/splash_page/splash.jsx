import React from 'react';
import PinIndexContainer from '../pins/pin_index_container';

export default class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  handleLogout() {
    this.props.logout().then(this.props.openModal('login'))
  }


  render() {
    const { currentUser, logout, openModal } = this.props;
    if (!currentUser) {
      return (
        <div className="hey-eugene"></div>
      )
    }
    return (
      <div className="splash-page-wrapper">
        <PinIndexContainer/>
      </div>
    )
  }
}