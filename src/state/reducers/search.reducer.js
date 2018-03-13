import { SET_SEARCH_RESULTS } from '../actionTypes';
const initialState = {
  results: ''
}

const behaviors = {
  [SET_SEARCH_RESULTS](state, action) {
    return { ...state, results: action.payload }
  }
}

export default function(state ={}, action) {
  const behavior = behaviors[action.type]
  return behavior ? behavior(state, action) : state
}

