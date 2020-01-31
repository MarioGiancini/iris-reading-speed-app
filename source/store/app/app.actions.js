import { createAction } from 'redux-act';
import { createActionWithStatuses } from 'utilities/store';

const startReadingTest = createAction('[app] start reading test');
const finishReadingTest = createActionWithStatuses('[app] finish reading test');
const sendReadingScoreToServer = createAction('[app] send reading score to server');

export {
  startReadingTest,
  finishReadingTest,
  sendReadingScoreToServer,
};
