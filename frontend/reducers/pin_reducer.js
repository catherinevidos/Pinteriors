import {
  RECEIVE_PIN,
  RECEIVE_PINS,
  REMOVE_PIN
} from '../actions/pin_actions';

const PinReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PIN:
      return Object.assign({}, state, action.pin)
    case RECEIVE_PINS:
      return Object.assign({}, state, action.pins)
    case REMOVE_PIN:
      let newState = Object.assign({}, state);
      delete newState[action.pinId];
      return newState;
    default:
      return state;
  }
}

export default PinReducer;