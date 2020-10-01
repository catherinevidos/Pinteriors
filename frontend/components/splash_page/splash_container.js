import {
  connect
} from 'react-redux';

import {
  logoutUser
} from '../../actions/session_actions';
import {
  openModal
} from '../../actions/modal_actions';
import {
  startLoading,
  stopLoading
} from '../../actions/loading_actions';

import {fetchBoards} from '../../actions/board_actions';

import Splash from './splash';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session && session.id && entities.users[session.id],
  pins: Object.values(entities.pins)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal)),
  startLoading: (loading) => dispatch(startLoading(loading)),
  stopLoading: () => dispatch(stopLoading()),
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);