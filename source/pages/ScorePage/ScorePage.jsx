import React from 'react';
import types from 'prop-types';

import { ReadingScore } from 'Components';
import { Container } from './ScorePage.Components';

const ScorePage = ({ readingSpeed }) => (
  <Container>
    <ReadingScore readingSpeed={readingSpeed} />
  </Container>
);

ScorePage.propTypes = {
  readingSpeed: types.number.isRequired,
};

export { ScorePage };
