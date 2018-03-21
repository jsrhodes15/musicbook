import {
  RESET_SEARCH_VALUE,
  SET_SEARCH_ERROR,
  SET_SEARCH_RESULTS,
  SET_SEARCH_VALUE
} from '../actionTypes';

const initialState = {
  fieldValue: '',
  results: [],
  resultCount: 0,
  previousSearch: '',
  searchError: ''
}

const behaviors = {
  [SET_SEARCH_VALUE](state, action) {
    return {
      ...state,
      fieldValue: action.payload,
    }
  },
  [SET_SEARCH_RESULTS](state, action) {
    return {
      ...state,
      results: action.payload.results,
      resultCount: action.payload.resultCount,
      previousSearch: action.payload.searchValue,
      fieldValue: '',
      searchError: '',
    }
  },
  [RESET_SEARCH_VALUE](state, action) {
    return {
      ...state,
      fieldValue: '',
    }
  },
  [SET_SEARCH_ERROR](state, action) {
    return {
      ...state, 
      searchError: 'Ooops, something went wrong! Please try again.',
    }
  },
}

export default function(state = initialState, action) {
  const behavior = behaviors[action.type]
  return behavior ? behavior(state, action) : state
}

