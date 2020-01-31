import { push } from 'connected-react-router';
import { put, call, select, takeEvery } from 'redux-saga/effects';

import * as api from 'api';
import * as actions from './app.actions';

import { getStartTime, getFinishTime } from './app.selectors';

const getReadingSpeed = (startTime, finishTime, wordsCount) => {
  const timeInMinutes = (finishTime - startTime) / 1000 / 60;
  return Math.round(wordsCount / timeInMinutes);
};

const finishReadingTestSaga = function* ({ payload }) {
  yield put(actions.finishReadingTest.success());

  const { wordsCount } = payload;

  const startTime = yield select(getStartTime);
  const finishTime = yield select(getFinishTime);
  const readingSpeed = getReadingSpeed(startTime, finishTime, wordsCount);

  yield put(push(`/results/${readingSpeed}`));
};

const sendReadingScoreServerSaga = function* ({ payload: score }) {
  yield call(api.sendResults, score);
};

const appSaga = function* () {
  yield takeEvery(actions.finishReadingTest, finishReadingTestSaga);
  yield takeEvery(actions.sendReadingScoreToServer, sendReadingScoreServerSaga);
};

export { appSaga };
