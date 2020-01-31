import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';

import { SigninPage } from './SigninPage';

const SigninPageContainer = ({ signin }) => (
  <SigninPage onSignin={signin} />
);

SigninPageContainer.propTypes = {
  signin: PropTypes.func,
};

const ConnectedSigninPageContainer = connect(
  null,
  { ...actions.auth },
)(SigninPageContainer);

export { ConnectedSigninPageContainer as SigninPageContainer };
