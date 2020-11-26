import {
  combineReducers
} from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import pinErrorsReducer from './pin_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  pinErrors: pinErrorsReducer
});