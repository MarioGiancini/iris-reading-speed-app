import { createReducer } from 'redux-act';

import * as actions from './results.actions';

const initialState = {
  results: [],
};

const reducer = {
  [actions.fetchResultsSuccess]: (state, results) => ({
    ...state,
    results,
  }),
};

export default createReducer(reducer, initialState);
