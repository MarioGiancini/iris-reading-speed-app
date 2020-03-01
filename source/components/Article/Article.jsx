import React from 'react';
import types from 'prop-types';
import { Container } from './Article.Components';

const Article = ({ disabled, children }) => (
  <Container disabled={disabled}>
    {children}
  </Container>
);

Article.propTypes = {
  disabled: types.bool,
  children: types.any,
};

Article.defaultProps = {
  disabled: false,
};

export { Article };
