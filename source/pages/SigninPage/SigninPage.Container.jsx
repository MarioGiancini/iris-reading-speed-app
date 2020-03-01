import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';

import { SigninPage } from './SigninPage';

const SigninPageContainer = ({ signin }) => (
  <SigninPage onSignin={signin} />
);

SigninPageContainer.propTypes = {
  signin: types.func,
};

const ConnectedSigninPageContainer = connect(
  null,
  { ...actions.auth },
)(SigninPageContainer);

export { ConnectedSigninPageContainer as SigninPageContainer };
