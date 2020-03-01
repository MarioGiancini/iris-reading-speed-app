import * as r from 'ramda';
import { createReducer } from 'redux-act';

import * as actions from './results.actions';

const initialState = {
  results: {},
  fetchResultsRequestStatus: '',
  deleteResultEntryRequestStatus: '',
};

const reducer = {
  [actions.fetchResults.start]: state => ({
    ...state,
    fetchResultsRequestStatus: 'pending',
  }),

  [actions.fetchResults.success]: (state, results) => ({
    ...state,
    results,
    fetchResultsRequestStatus: 'success',
  }),

  [actions.fetchResults.failure]: state => ({
    ...state,
    fetchResultsRequestStatus: 'failure',
  }),

  [actions.deleteResultEntry.start]: (state, { id }) => ({
    ...state,
    results: r.assocPath([id, 'isDeleting'], true, state.results),
    deleteResultEntryRequestStatus: 'pending',
  }),

  [actions.deleteResultEntry.success]: (state, { id }) => ({
    ...state,
    results: r.omit([id], state.results),
  }),

  [actions.deleteResultEntry.failure]: state => ({
    ...state,
    deleteResultEntryRequestStatus: 'failure',
  }),
};

export default createReducer(reducer, initialState);
