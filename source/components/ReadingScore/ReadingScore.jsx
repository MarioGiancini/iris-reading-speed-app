import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Heading,
  WordsPerMinute,
} from './ReadingScore.Components';

const ReadingScore = ({ readingSpeed }) => (
  <Container>
    <Heading>Your reading score is:</Heading>

    <WordsPerMinute>
      <strong>{Math.round(readingSpeed)}</strong> words per minute
    </WordsPerMinute>
  </Container>
);

ReadingScore.propTypes = {
  readingSpeed: PropTypes.number.isRequired,
};

export { ReadingScore };
