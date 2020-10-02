import {
  connect
} from 'react-redux';

import {
  openModal
} from '../../actions/modal_actions';

import {
  fetchBoards
} from '../../actions/board_actions';

import {
  createPin, fetchPins
} from '../../actions/pin_actions';

import {pinToBoard} from '../../actions/join_pins_boards_actions';

import {withRouter} from 'react-router-dom';

import CreatePin from './create_pin';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards),
  pins: Object.values(state.entities.pins)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchBoards: () => dispatch(fetchBoards()),
  fetchPins: () => dispatch(fetchPins()),
  createPin: (pin) => dispatch(createPin(pin)),
  pinToBoard: (boardPin) => dispatch(pinToBoard(boardPin))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePin));