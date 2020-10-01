import React from 'react';
import PinIndexContainer from '../pins/pin_index_container';
import {Link} from 'react-router-dom';
import CreatePinContainer from '../pins/create_pin_container';

export default class Splash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: 'loading',
    }
    // this.handlelogout = this.handleLogout.bind(this);
  }

  // handleLogout() {
  //   this.props.logout().then(this.props.openModal('login'))
  // }

  // componentDidMount() {
  //   // this.props.fetchBoards();
  //   // this.setTimeout(() => {
  //   //   this.setState({ loading: '' })
  //   // }, 2000);
  // }


  render() {
    const { currentUser, logout, openModal, pins, startLoading } = this.props;
    // if ((currentUser) && (this.state.loading) === 'loading') {
    //   return startLoading('loading');
    // }
    if (!currentUser) {
      return (
        <div className="hey-eugene"></div>
      )
    } else {
      return (
        <div className="splash-page-wrapper">
          <PinIndexContainer />
          <div className="plus">
            <Link to="/pins/create">
              <i className="fas fa-plus"></i>
            </Link>
          </div>
        </div>
      );
    }
  }
}