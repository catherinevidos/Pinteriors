import React from 'react';

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import SearchbarContainer from '../Searchbar/searchbar_container';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/session_actions';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout().then(this.props.openModal('login'));
  }

  render() {
    const { currentUser, openModal, closeModal} = this.props;
    
       const profilePic = ((currentUser) && (currentUser.photoUrl)) ? (
         <img className="nav-profile-image" src={currentUser.photoUrl} />
       ) : (
         <i class="fas fa-user-circle"></i>
       );

    if (currentUser) {
      return (
        <div className="nav-container">
          <ul className="nav-ul">
            <li className="nav-lis">
              <a key="1" className="nav-link-home-logo" href="#"></a>
              <a key="2" className="nav-link-home" href="#">
                Home
              </a>
              <a key="3" className="nav-link-home" href="#">
                Following
              </a>
              <SearchbarContainer />
              <div className='icon-wrapper'>
                <Link
                  to={`/users/${currentUser.id}`}
                  key="4"
                  className="nav-link-home"
                  href="#"
                >
                  {profilePic}
                </Link>
              </div>
              <button
                onClick={() => {
                  this.handleClick();
                }}
              >
                Log out
              </button>
            </li>
          </ul>
        </div>
      );
      } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

