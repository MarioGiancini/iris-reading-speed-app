import { createAction } from 'redux-act';
import { push } from 'connected-react-router';

import * as api from 'api';

const startReadingTest = createAction('[app] start reading test');
const finishReadingTestSuccess = createAction('[app] finish reading test');

const getReadingSpeed = (startTime, finishTime, wordsCount) => {
  const timeInMinutes = (finishTime - startTime) / 1000 / 60;
  return wordsCount / timeInMinutes;
};

const finishReadingTest = (wordsCount) => (dispatch, getState) => {
  dispatch(finishReadingTestSuccess());

  const { app } = getState();
  const { startTime, finishTime } = app;
  const readingSpeed = getReadingSpeed(startTime, finishTime, wordsCount);
  const roundedReadingSpeed = Math.round(readingSpeed);
  dispatch(push(`/results/${roundedReadingSpeed}`));
};

const sendReadingSpeedResultToServer = (readingSpeed) => () => {
  api.sendResults(readingSpeed);
};

export {
  startReadingTest,
  finishReadingTest,
  finishReadingTestSuccess,
  sendReadingSpeedResultToServer,
};
