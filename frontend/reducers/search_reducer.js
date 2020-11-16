import {
  SEARCH
} from '../actions/search_actions';

const searchParams = Object.freeze({
  searchPins: ''
})

const SearchReducer = (state = searchParams, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch (action.type) {
    case SEARCH:
      newState[action.query] = action.value;
      return newState;
    default:
      return state;
  }
}

export default SearchReducer;