import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';

import { SigninPage } from './SigninPage';

const SigninPageContainerBase = ({ signin }) => (
  <SigninPage onSignin={signin} />
);

SigninPageContainerBase.propTypes = {
  signin: types.func.isRequired,
};

const SigninPageContainer = connect(
  null,
  { ...actions.auth },
)(SigninPageContainerBase);

export { SigninPageContainer as SigninPage };
