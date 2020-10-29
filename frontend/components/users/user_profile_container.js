import {
  connect
} from 'react-redux';

import {
  fetchPins
} from '../../actions/pin_actions';

import {fetchBoards} from '../../actions/board_actions';

import {
  openModal
} from '../../actions/modal_actions';

import UserProfile from './user_profile';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards),
  pins: Object.values(state.entities.pins)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchBoards: () => dispatch(fetchBoards()),
  fetchPins: () => dispatch(fetchPins())
});

export default connect(mapStateToProps,mapDispatchToProps)(UserProfile);