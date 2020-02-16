import firebase from 'firebase/app';
import { push } from 'connected-react-router';
import { put, call, select, takeEvery } from 'redux-saga/effects';

import * as api from 'api';
import * as actions from './app.actions';

import { getStartTime, getFinishTime } from './app.selectors';

const getReadingSpeed = (startTime, finishTime, wordsCount) => {
  const timeInMinutes = (finishTime - startTime) / 1000 / 60;
  return Math.round(wordsCount / timeInMinutes);
};

const getCurrentPosition = () => (
  new Promise((resolve, reject) => {
    const options = {
      timeout: 10000,
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (error) => {
        reject(new Error(error.message));
      },
      options,
    );
  })
);

const finishReadingTestSaga = function* ({ payload }) {
  yield put(actions.finishReadingTest.success());

  const { wordsCount } = payload;

  const startTime = yield select(getStartTime);
  const finishTime = yield select(getFinishTime);
  const readingSpeed = getReadingSpeed(startTime, finishTime, wordsCount);

  yield put(push(`/results/${readingSpeed}`));
};

const sendReadingScoreServerSaga = function* ({ payload: score }) {
  const createdResults = yield call(api.sendResults, score);

  if (navigator.geolocation) {
    try {
      const { latitude, longitude } = yield call(getCurrentPosition);
      const location = new firebase.firestore.GeoPoint(latitude, longitude);
      yield call(api.setResultsLocation, createdResults, location);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error getting current geolocation. Message: ', error.message);
    }
  }
};

const appSaga = function* () {
  yield takeEvery(actions.finishReadingTest, finishReadingTestSaga);
  yield takeEvery(actions.sendReadingScoreToServer, sendReadingScoreServerSaga);
};

export { appSaga };
