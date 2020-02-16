import { push } from 'connected-react-router';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as api from 'api';
import * as actions from './auth.actions';

const signinSaga = function* ({ payload }) {
  const { email, password } = payload;
  yield call(api.signin, email, password);
  yield put(push('/admin'));
};

const signoutSaga = function* () {
  yield call(api.signout);
  yield put(push('/signin'));
};

const authSaga = function* () {
  yield takeLatest(actions.signin, signinSaga);
  yield takeEvery(actions.signout, signoutSaga);
};

export { authSaga };
