import { normalize, schema } from 'normalizr';
import { put, call, takeEvery } from 'redux-saga/effects';

import * as api from 'api';
import * as actions from './results.actions';

const normalizeResults = (data) => {
  const entry = new schema.Entity('results');
  const { entities: { results } } = normalize(data, [entry]);

  return results;
};

const fetchResultsSaga = function* () {
  yield put(actions.fetchResults.start());

  try {
    const data = yield call(api.fetchResults);
    const results = normalizeResults(data);
    yield put(actions.fetchResults.success(results));
  } catch (error) {
    yield put(actions.fetchResults.failure());
  }
};

const deleteResultEntrySaga = function* ({ payload: resultEntry }) {
  yield put(actions.deleteResultEntry.start(resultEntry));

  try {
    yield call(api.deleteResult, resultEntry.id);
    yield put(actions.deleteResultEntry.success(resultEntry));
  } catch (error) {
    yield put(actions.deleteResultEntry.failure());
  }
};

const resultsSaga = function* () {
  yield takeEvery(actions.fetchResults, fetchResultsSaga);
  yield takeEvery(actions.deleteResultEntry, deleteResultEntrySaga);
};

export { resultsSaga };
