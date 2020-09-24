import React from 'react';

export default class Splash extends React.Component {
  constructor(props){
    super(props)
  }


  render() {
    const { currentUser, logout, openModal } = this.props;
    return (
      <div>
        <button onClick={logout}>logout</button>
      </div>
    )
  }
}