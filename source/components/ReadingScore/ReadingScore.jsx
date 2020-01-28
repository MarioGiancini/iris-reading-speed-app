import React from 'react';
import PropTypes from 'prop-types';

import { ReadingSpeedChart } from 'Components';
import { Container, Heading, WordsPerMinute } from './ReadingScore.Components';

const ReadingScore = ({ readingSpeed }) => (
  <Container>
    <Heading>Your reading score is:</Heading>

    <WordsPerMinute>
      <strong>{readingSpeed}</strong> words per minute
    </WordsPerMinute>

    <ReadingSpeedChart />
  </Container>
);

ReadingScore.propTypes = {
  readingSpeed: PropTypes.number.isRequired,
};

export { ReadingScore };
