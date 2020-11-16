import { combineReducers } from 'redux';
import modal from './modal_reducer';
import loading from './loading_reducer';
import search from './search_reducer';

export default combineReducers({
  modal,
  loading,
  search
});