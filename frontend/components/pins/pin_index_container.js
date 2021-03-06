import {
  connect
} from 'react-redux';

import {
  openModal
} from '../../actions/modal_actions';

import { fetchPins } from '../../actions/pin_actions';

import PinIndex from './pin_index';


const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const modal = state.ui.modal;
  const searchPins = Object.values(ownProps);
  const pins = Object.values(state.entities.pins)
  return {
    searchPins: searchPins, 
    pins: pins,
    modal: modal,
    currentUser: currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchPins: () => dispatch(fetchPins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinIndex);