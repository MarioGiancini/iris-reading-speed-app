import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as api from 'api';
import * as actions from './auth.actions';

const signoutSaga = function* () {
  yield call(api.signout);
  yield put(push('/signin'));
};

const authSaga = function* () {
  yield takeEvery(actions.signout, signoutSaga);
};

export { authSaga };
