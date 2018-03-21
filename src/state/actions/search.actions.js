import axios from 'axios';

import {
  RESET_SEARCH_VALUE,
  SET_SEARCH_ERROR,
  SET_SEARCH_RESULTS,
  SET_SEARCH_VALUE
} from '../actionTypes';

const BASE_RESOURCE = 'https://itunes.apple.com/search?'
const BASE_PARAMS = 'country=us&entity=musicTrack&attribute=artistTerm';

export function resetSearchValue() {
  return {
    type: RESET_SEARCH_VALUE,
  }
}

export function setSearchValue(fieldValue) {
  return {
    type: SET_SEARCH_VALUE,
    payload: fieldValue,
  }
}

export function setSearchError() {
  return {
    type: SET_SEARCH_ERROR,
  }
}

export function setSearchResults(results, searchValue) {
  return {
    type: SET_SEARCH_RESULTS,
    payload: {
      results,
      searchValue,
    }
  }
} 

export function getSearchResults(searchValue) {
  return async dispatch => {
    const formattedValue = searchValue.trim().split(' ').join('+');
    const searchParams = `&term=${formattedValue}`;
    const url = `${BASE_RESOURCE}${BASE_PARAMS}${searchParams}}`;
    
    try {
      const results = await axios.get(url)
      dispatch(setSearchResults(results.data, searchValue))
    } catch (error) {  
    dispatch(setSearchError(error));
    }
    dispatch(resetSearchValue())
  }

}