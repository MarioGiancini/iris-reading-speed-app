import { push } from 'connected-react-router';
import { put, call, select, takeEvery } from 'redux-saga/effects';

import * as api from 'api';
import * as actions from './app.actions';

import { getStartTime, getFinishTime } from './app.selectors';

const getReadingSpeed = (startTime, finishTime, wordsCount) => {
  const timeInMinutes = (finishTime - startTime) / 1000 / 60;
  return Math.round(wordsCount / timeInMinutes);
};

const sendReadingScoreToServer = function* (score) {
  yield call(api.sendResults, score);
};

const finishReadingTestSaga = function* ({ payload }) {
  yield put(actions.finishReadingTest.success());

  const { wordsCount } = payload;

  const startTime = yield select(getStartTime);
  const finishTime = yield select(getFinishTime);
  const readingSpeed = getReadingSpeed(startTime, finishTime, wordsCount);

  yield put(push(`/results/${readingSpeed}`));
  yield call(sendReadingScoreToServer, readingSpeed);
};

const appSaga = function* () {
  yield takeEvery(actions.finishReadingTest, finishReadingTestSaga);
};

export { appSaga };
