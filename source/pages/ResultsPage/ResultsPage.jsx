import React from 'react';
import PropTypes from 'prop-types';

import { ReadingScore } from 'Components';
import { Container } from './ResultsPage.Components';

const ResultsPage = ({ readingSpeed }) => (
  <Container>
    <ReadingScore readingSpeed={readingSpeed} />
  </Container>
);

ResultsPage.propTypes = {
  readingSpeed: PropTypes.number.isRequired,
};

export { ResultsPage };
