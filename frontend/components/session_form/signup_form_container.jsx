import { connect } from 'react-redux';
import { loginDemoUser, signupUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signupUser(user)),
    switchForm: () => dispatch(openModal({modal: 'login'})),
    closeModal: () => dispatch(closeModal()),
    loginDemoUser: () => dispatch(loginDemoUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);