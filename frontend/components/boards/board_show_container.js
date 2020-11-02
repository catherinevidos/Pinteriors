import {
  connect
} from 'react-redux';

import {
  openModal
} from '../../actions/modal_actions';

import { fetchPins } from '../../actions/pin_actions';
import {fetchBoards} from '../../actions/board_actions';

import BoardShow from './board_show';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  pins: state.entities.pins,
  modal: state.ui.modal,
  board: state.entities.boards[ownProps.match.params.boardId]
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchPins: () => dispatch(fetchPins()),
  fetchBoards: () => dispatch(fetchBoards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);