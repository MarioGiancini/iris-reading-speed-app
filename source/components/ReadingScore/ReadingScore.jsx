import React from 'react';
import types from 'prop-types';
import AnimatedNumber from 'react-animated-number';

import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

import { ReadingSpeedChart } from 'Components';

import {
  Container,
  Heading,
  WordsPerMinuteNumber,
  WordsPerMinuteDescription,
  SocialShareButtons,
} from './ReadingScore.Components';

const SocialShareURL = 'reading-speed-application.now.sh';

const getSocialShareTitle = (readingSpeed) => (
  `I just read ${readingSpeed} wpm. Check out this site to test your reading speed - https://${SocialShareURL}`
);

const ReadingScore = ({ readingSpeed }) => {
  const [animatedValue, setAnimatedValue] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setAnimatedValue(readingSpeed);
    }, 500);
    window.parent.postMessage({ type: 'readingSpeed', value: readingSpeed }, '*');
  }, [readingSpeed]);

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

      <SocialShareButtons>
        <FacebookShareButton
          url={SocialShareURL}
          quote={getSocialShareTitle(readingSpeed)}
          hashtag="#speedreading"
        >
          <FacebookIcon round size={32} />
        </FacebookShareButton>

        <LinkedinShareButton
          url={SocialShareURL}
          title={getSocialShareTitle(readingSpeed)}
        >
          <LinkedinIcon round size={32} />
        </LinkedinShareButton>

        <TwitterShareButton
          url={SocialShareURL}
          title={getSocialShareTitle(readingSpeed)}
          hashtags={['speedreading']}
        >
          <TwitterIcon round size={32} />
        </TwitterShareButton>
      </SocialShareButtons>
    </Container>
  );
};

ReadingScore.propTypes = {
  readingSpeed: types.number.isRequired,
};

export { ReadingScore };
