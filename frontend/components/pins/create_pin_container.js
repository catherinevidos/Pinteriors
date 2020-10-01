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
  createPin
} from '../../actions/pin_actions';

import CreatePin from './create_pin';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  boards: Object.values(state.entities.boards)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchBoards: () => dispatch(fetchBoards()),
  createPin: (pin) => dispatch(createPin(pin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePin);