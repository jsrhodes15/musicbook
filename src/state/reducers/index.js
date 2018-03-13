import { combineReducers } from 'redux';
import searchReducer from './search.reducer';

const rootReducer = combineReducers({
  searchState: searchReducer,
});

export default rootReducer;
