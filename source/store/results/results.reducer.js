import { createReducer } from 'redux-act';

import * as actions from './results.actions';

const initialState = {
  list: [],
  fetchResultListRequestStatus: '',
};

const reducer = {
  [actions.fetchResultsList.start]: state => ({
    ...state,
    fetchResultListRequestStatus: 'pending',
  }),

  [actions.fetchResultsList.success]: (state, results) => ({
    ...state,
    list: results,
    fetchResultListRequestStatus: 'success',
  }),

  [actions.fetchResultsList.failure]: state => ({
    ...state,
    fetchResultListRequestStatus: 'failure',
  }),
};

export default createReducer(reducer, initialState);
