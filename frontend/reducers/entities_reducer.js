import {
  combineReducers
} from 'redux';

import users from './users_reducer';
import pins from './pin_reducer';
import boards from './board_reducer';

export default combineReducers({
  users,
  pins,
  boards
});

