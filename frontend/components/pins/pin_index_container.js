import {
  connect
} from 'react-redux';

import {
  openModal
} from '../../actions/modal_actions';

import { fetchPins } from '../../actions/pin_actions';

import PinIndex from './pin_index';


const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  pins: Object.values(state.entities.pins)
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchPins: () => dispatch(fetchPins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinIndex);