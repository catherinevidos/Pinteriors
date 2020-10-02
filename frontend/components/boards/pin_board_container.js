import {
  connect
} from 'react-redux';

import {
  openModal,
  closeModal
} from '../../actions/modal_actions';

import {
  fetchBoards
} from '../../actions/board_actions';

import {
  pinToBoard
} from '../../actions/join_pins_boards_actions';

import PinBoard from './pin_board';


const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    boards: Object.values(state.entities.boards)
  }
  
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchBoards: () => dispatch(fetchBoards()),
  pinToBoard: (boardPin) => dispatch(pinToBoard(boardPin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinBoard);