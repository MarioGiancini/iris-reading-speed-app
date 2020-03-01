import React from 'react';
import types from 'prop-types';

import { ReadingScore } from 'Components';
import { Container } from './ResultsPage.Components';

const ResultsPage = ({ readingSpeed }) => (
  <Container>
    <ReadingScore readingSpeed={readingSpeed} />
  </Container>
);

ResultsPage.propTypes = {
  readingSpeed: types.number.isRequired,
};

export { ResultsPage };
