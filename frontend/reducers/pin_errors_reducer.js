import {
  RECEIVE_PIN_ERRORS, CLEAR_PIN_ERRORS
} from '../actions/pin_actions';

import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modal_actions';

const pinErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIN_ERRORS:
      return action.errors;
    case CLOSE_MODAL:
      return [];
    case OPEN_MODAL:
      return [];
    case CLEAR_PIN_ERRORS:
      return [];
    default:
      return state;
  }
};

export default pinErrorsReducer;