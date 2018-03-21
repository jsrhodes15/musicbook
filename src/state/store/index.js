import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
  let middleware = [thunkMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    const createLogger = require('redux-logger').createLogger;
    const loggerMiddleware = createLogger();
    middleware = [ ...middleware, loggerMiddleware ];
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  )
}
