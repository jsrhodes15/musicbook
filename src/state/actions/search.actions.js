import { SET_SEARCH_RESULTS } from '../actionTypes';

export function setSearchResults(results) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  }
}
