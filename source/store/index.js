import thunk from 'redux-thunk';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';

/* #region reducers */
import appReducer from './app/app.reducer';
/* #endregion */

/* #region actions */
import * as authActions from './app/app.actions';
/* #endregion */

const isDevelopmentMode = process.env.NODE_ENV === 'development';

const rootReducer = combineReducers({
  app: appReducer,
});

export const actions = {
  app: authActions,
};

export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  // eslint-disable-next-line no-underscore-dangle
  isDevelopmentMode && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));
