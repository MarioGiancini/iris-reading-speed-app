import thunk from 'redux-thunk';
// TODO: install history npm package as peer dependecy
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';

/* #region reducers */
import appReducer from './app/app.reducer';
import resultsReducer from './results/results.reducer';
/* #endregion */

/* #region actions */
import * as appActions from './app/app.actions';
import * as resultsActions from './results/results.actions';
/* #endregion */

const browserHistory = createBrowserHistory();
const isDevelopmentMode = process.env.NODE_ENV === 'development';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  app: appReducer,
  results: resultsReducer,
});

const actions = {
  app: appActions,
  results: resultsActions,
};

const store = createStore(createRootReducer(browserHistory), compose(
  applyMiddleware(routerMiddleware(browserHistory), thunk),
  // eslint-disable-next-line no-underscore-dangle
  isDevelopmentMode && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

export {
  store,
  actions,
  browserHistory as history,
};
