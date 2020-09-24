import React from 'react';

export default class Splash extends React.Component {
  constructor(props){
    super(props)
  }

  handleLogout() {
    this.props.logout().then(this.props.openModal('login'))
  }


  render() {
    const { currentUser, logout, openModal } = this.props;
    
    return (
      <div>
        <button onClick={() => { this.handleLogout() }}>logout</button>
      </div>
    )
  }
}