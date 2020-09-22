import {
  combineReducers
} from 'redux';

import sessionErrors from './session_errors_reducer';

export default combineReducers({
  sessionErrors,
});