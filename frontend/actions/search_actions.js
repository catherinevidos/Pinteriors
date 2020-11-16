import { fetchPins } from "../util/pin_api_util";

export const SEARCH = 'SEARCH';

export const updateSearch = (query, value) => {
  return {
    type: SEARCH,
    query,
    value
  };
};

export const search = (query, value) => (dispatch) => {
   return dispatch(updateSearch(query, value));
};