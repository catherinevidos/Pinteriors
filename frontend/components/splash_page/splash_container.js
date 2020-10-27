import {
  connect
} from 'react-redux';

import {
  logoutUser
} from '../../actions/session_actions';
import {
  openModal
} from '../../actions/modal_actions';

import {fetchBoards} from '../../actions/board_actions';
import {fetching, fetched} from '../../actions/loading_actions';

import Splash from './splash';

const mapStateToProps = ({ session, entities }) => ({
  currentUser: session && session.id && entities.users[session.id],
  pins: Object.values(entities.pins)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  openModal: modal => dispatch(openModal(modal)),
  fetchBoards: () => dispatch(fetchBoards()),
  startLoading: () => dispatch(fetching()),
  stopLoading: () => dispatch(fetched())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);