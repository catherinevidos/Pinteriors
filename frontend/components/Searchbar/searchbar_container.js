import {
  connect
} from 'react-redux';
import React from 'react';
import {
  logoutUser
} from '../../actions/session_actions';
import {
  openModal,
  closeModal
} from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({
  session,
  entities
}) => ({
  currentUser: session && session.id && entities.users[session.id]
});

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signupUser(user)),
    switchForm: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
    loginDemoUser: () => dispatch(loginDemoUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);