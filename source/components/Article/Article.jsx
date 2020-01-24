import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Article.Components';

const Article = ({ disabled, children }) => (
  <Container disabled={disabled}>
    {children}
  </Container>
);

Article.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

Article.defaultProps = {
  disabled: false,
};

export { Article };
