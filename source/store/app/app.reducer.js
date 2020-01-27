import { createReducer } from 'redux-act';
import * as actions from './app.actions';

const initialState = {
  startTime: null,
  finishTime: null,
};

const reducer = {
  [actions.startReadingTest]: state => ({
    ...state,
    startTime: new Date(),
  }),

  [actions.finishReadingTestSuccess]: state => ({
    ...state,
    finishTime: new Date(),
  }),
};

export default createReducer(reducer, initialState);
