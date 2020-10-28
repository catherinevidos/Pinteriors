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

import {pinToBoard} from '../../actions/join_pins_boards_actions';

import CreateDropdown from './dropdown';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  pins: Object.values(state.entities.pins),
  boards: Object.values(state.entities.boards)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchPins: () => dispatch(fetchPins()),
  fetchBoards: () => dispatch(fetchBoards()),
  createPin: (pin) => dispatch(createPin(pin)),
  pinToBoard: (boardPin) => dispatch(pinToBoard(boardPin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateDropdown);