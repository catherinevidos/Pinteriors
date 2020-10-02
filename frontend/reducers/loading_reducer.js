import {
  FETCHING,
  FETCHED
} from '../actions/loading_actions';


const initState= {
  loading: false
}
const LoadingReducer = (state=initState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case FETCHING:
      return {
        loading: true
      }
    case FETCHED:
      return {
        loading: false
      }
    default:
      return state;
  }
}

export default LoadingReducer;