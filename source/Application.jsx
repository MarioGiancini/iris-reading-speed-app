import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Intent } from '@blueprintjs/core';

import { getRandomArticle } from 'articles';

import { ReadingScore, Article } from 'Components';

import {
  Container,
  ControlContainer,
  IntroText,
  IntroTextHeading,
  ExampleButton,
  StartTestButton,
  FinishTestButton,
} from './Application.Components';

const ArticleContent = getRandomArticle();

const Application = ({ timeInMinutes, isTestStarted, isTestFinished, onTestStart, onTestFinish }) => {
  const [wordsCount, setWordsCount] = useState(0);
  const articleRef = useRef(null);

  useEffect(() => {
    const articleElement = articleRef.current;
    if (!articleElement) {
      return;
    }

    const articleContent = articleElement.textContent;
    setWordsCount(articleContent.trim().split(/\s+/).length);
  });

  const readingSpeed = wordsCount / timeInMinutes || 0;

  return (
    <Container>
      {
        isTestFinished === false &&
        <Article disabled={isTestStarted === false}>
          <div ref={articleRef} dangerouslySetInnerHTML={{ __html: ArticleContent }} />
        </Article>
      }

      {
        isTestStarted === false &&
        <ControlContainer>
          <IntroText>
            <IntroTextHeading>
              Prepare for reading the given article.
            </IntroTextHeading>

            <p>
              Press <ExampleButton intent={Intent.PRIMARY}>Start test</ExampleButton> button when you are ready
            </p>

            <p>
              Press <ExampleButton intent={Intent.SUCCESS}>Finish test</ExampleButton> button when you finish.
            </p>
          </IntroText>

          <StartTestButton fill large intent={Intent.PRIMARY} onClick={() => onTestStart()}>
            Start test
          </StartTestButton>
        </ControlContainer>
      }

      {
        isTestStarted && isTestFinished === false &&
        <FinishTestButton intent={Intent.SUCCESS} onClick={() => onTestFinish()}>
          Finish test
        </FinishTestButton>
      }

      {
        isTestFinished &&
        <ReadingScore readingSpeed={readingSpeed} />
      }
    </Container>
  );
};

Application.propTypes = {
  timeInMinutes: PropTypes.number,
  isTestStarted: PropTypes.bool,
  isTestFinished: PropTypes.bool,
  onTestStart: PropTypes.func.isRequired,
  onTestFinish: PropTypes.func.isRequired,
};

Application.defaultProps = {
  timeInMinutes: 0,
  isTestStarted: false,
  isTestFinished: false,
};

export { Application };
