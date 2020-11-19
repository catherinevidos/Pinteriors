import {
  connect
} from 'react-redux';

import {
  openModal, closeModal
} from '../../actions/modal_actions';

import {
  fetchPins
} from '../../actions/pin_actions';

import {
  fetchBoards
} from '../../actions/board_actions';

import {createBoard} from '../../actions/board_actions';

import EditProfile from './edit_profile';
import { updateUser, fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  pins: Object.values(state.entities.pins),
  boards: Object.values(state.entities.boards),
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  updateUser: user => dispatch(updateUser(user)),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);