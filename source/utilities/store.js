import { createAction } from 'redux-act';

export function createActionWithStatuses(actionBaseName) {
  const action = createAction(`${actionBaseName}`);

  /* eslint-disable no-param-reassign */
  action.start = createAction(`${actionBaseName} / start`);
  action.success = createAction(`${actionBaseName} / success`);
  action.failure = createAction(`${actionBaseName} / failure`);
  /* eslint-enable no-param-reassign */

  return action;
}
