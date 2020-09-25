import {
  connect
} from 'react-redux';

import {
  logoutUser
} from '../../actions/session_actions';
import {
  openModal
} from '../../actions/modal_actions';
import Splash from './splash';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session && session.id && entities.users[session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);