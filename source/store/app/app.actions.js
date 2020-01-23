import { createAction } from 'redux-act';

const startReadingTest = createAction('[app] start reading test');
const finishReadingTest = createAction('[app] finish reading test');

export {
  startReadingTest,
  finishReadingTest,
};
