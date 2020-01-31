import { put, call, takeEvery } from 'redux-saga/effects';

import * as api from 'api';
import * as actions from './results.actions';

const fetchResultsListSaga = function* () {
  yield put(actions.fetchResultsList.start());

  try {
    const resultsList = yield call(api.fetchResultsList);
    yield put(actions.fetchResultsList.success(resultsList));
  } catch (error) {
    yield put(actions.fetchResultsList.failure());
  }
};

const resultsSaga = function* () {
  yield takeEvery(actions.fetchResultsList, fetchResultsListSaga);
};

export { resultsSaga };
