import React from 'react';
import PinIndexContainer from '../pins/pin_index_container';
import {Link, withRouter} from 'react-router-dom';
import CreatePinContainer from '../pins/create_pin_container';
import LoadingIcon from '../loading/loading';

 class Splash extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleLogout() {
  //   this.props.logout().then(this.props.openModal('login'))
  // }

 componentDidMount() {
    setTimeout(this.setState({loading: false}), 10000);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/pins`)
  }

  render() {
    const { currentUser, logout, openModal, pins, startLoading } = this.props;

    if (this.state.loading) {
      return <LoadingIcon />;
    }

    if (!currentUser) {
      return (
        <div className="hey-eugene"></div>
      )
    } else {
      return (

        <div className="splash-page-wrapper">
         <PinIndexContainer/>
          <div>
            <button
              className="plus"
               onClick={this.handleSubmit}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Splash);