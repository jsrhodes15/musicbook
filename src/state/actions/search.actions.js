import {
  SET_SEARCH_RESULTS,
  SET_SEARCH_VALUE
} from '../actionTypes';

export function setSearchValue(value) {
  return {
    type: SET_SEARCH_VALUE,
    payload: value,
  }
}

export function setSearchResults(results) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results,
  }
} 

export function getSearchResults(value) {
  return dispatch => {
    console.log(value);
  }
}