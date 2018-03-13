import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  )
}
