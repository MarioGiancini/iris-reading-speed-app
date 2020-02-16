import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, InputGroup } from '@blueprintjs/core';

import { Container, SubmitButton } from './SigninPage.Components';

const SigninPage = ({ onSignin }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault();
    onSignin({ email, password });
  }, [onSignin, email, password]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup label="Email">
          <InputGroup
            autoFocus
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>

        <FormGroup label="Password">
          <InputGroup
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </FormGroup>

        <SubmitButton type="submit">
          Sign in
        </SubmitButton>
      </form>
    </Container>
  );
};

SigninPage.propTypes = {
  onSignin: PropTypes.func.isRequired,
};

export { SigninPage };
