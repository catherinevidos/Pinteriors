import {
  combineReducers
} from 'redux';

import session from './session_errors_reducer';
import pin from './pin_errors_reducer';

export default combineReducers({
  session,
  pin
});