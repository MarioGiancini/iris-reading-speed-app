import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './Article.Components';

const Article = ({ blurred, children }) => (
  <Container blurred={blurred}>
    {children}
  </Container>
);

Article.propTypes = {
  blurred: PropTypes.bool,
  children: PropTypes.any,
};

Article.defaultProps = {
  blurred: false,
};

export { Article };
