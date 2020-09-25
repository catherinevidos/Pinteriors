import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import Footer from '../footer/footer';

function Modal({ modal, closeModal }) {
  
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="hey-eugene">
      <div className="modal-background">
        <div className="modal-child-text">
          <h1>Sign up to get your ideas</h1>
          {component}
        </div>
        <footer className="footer-container">
          <Footer />
        </footer>
        {/* <div className="modal-child" onClick={e => e.stopPropagation()}> */}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);