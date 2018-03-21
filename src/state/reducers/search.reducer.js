import {
  SET_SEARCH_RESULTS,
  SET_SEARCH_VALUE,
} from '../actionTypes';

const initialState = {
  value: '',
  results: [],
}

const behaviors = {
  [SET_SEARCH_VALUE](state, action) {
    return { ...state, value: action.payload }
  },
  [SET_SEARCH_RESULTS](state, action) {
    return { ...state, results: action.payload }
  }
}

export default function(state = initialState, action) {
  const behavior = behaviors[action.type]
  return behavior ? behavior(state, action) : state
}

