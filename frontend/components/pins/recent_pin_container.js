import {
  connect
} from 'react-redux';

import {
  openModal, closeModal
} from '../../actions/modal_actions';

import {
  fetchBoards
} from '../../actions/board_actions';

import {fetchPins} from '../../actions/pin_actions';

import {withRouter} from 'react-router-dom';

import RecentPin from './recent_pin.jsx';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  boards: state.entities.boards,
  pins: Object.values(state.entities.pins)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchBoards: () => dispatch(fetchBoards()),
  fetchPins: () => dispatch(fetchPins()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RecentPin));