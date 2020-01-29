import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';

import { ReadingSpeedChart } from 'Components';

import {
  Container,
  Heading,
  WordsPerMinuteNumber,
  WordsPerMinuteDescription,
} from './ReadingScore.Components';

const ReadingScore = ({ readingSpeed }) => {
  const [animatedValue, setAnimatedValue] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimatedValue(readingSpeed);
    }, 500);
  }, []);

  return (
    <Container>
      <Heading>Your reading speed was:</Heading>

      <WordsPerMinuteNumber>
        <AnimatedNumber
          value={animatedValue}
          duration={1000}
          stepPrecision={0}
        />
      </WordsPerMinuteNumber>

      <WordsPerMinuteDescription>
        words per minute <br />
        (wpm)
      </WordsPerMinuteDescription>

      <ReadingSpeedChart readingSpeed={readingSpeed} />
    </Container>
  );
};

ReadingScore.propTypes = {
  readingSpeed: PropTypes.number.isRequired,
};

export { ReadingScore };
