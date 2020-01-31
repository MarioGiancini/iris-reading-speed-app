import React from 'react';
import PropTypes from 'prop-types';
import { Intent } from '@blueprintjs/core';

import { getRandomArticle } from 'articles';
import { Article } from 'Components';

import {
  Container,
  ControlContainer,
  IntroText,
  IntroTextHeading,
  ExampleButton,
  StartTestButton,
  FinishTestButton,
} from './TestPage.Components';

const ArticleContent = getRandomArticle();

const TestPage = ({
  isTestStarted,
  isTestFinished,
  onTestStart,
  onTestFinish,
}) => {
  const [wordsCount, setWordsCount] = React.useState(0);
  const articleRef = React.useRef(null);

  React.useEffect(() => {
    const articleElement = articleRef.current;
    if (!articleElement) {
      return;
    }

    const articleContent = articleElement.textContent;
    setWordsCount(articleContent.trim().split(/\s+/).length);
  });

  return (
    <Container>
      {isTestFinished === false && (
        <Article disabled={isTestStarted === false}>
          <div ref={articleRef} dangerouslySetInnerHTML={{ __html: ArticleContent }} />
        </Article>
      )}

      {isTestStarted === false && (
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
      )}

      {isTestStarted && isTestFinished === false && (
        <FinishTestButton intent={Intent.SUCCESS} onClick={() => onTestFinish({ wordsCount })}>
          Finish test
        </FinishTestButton>
      )}
    </Container>
  );
};

TestPage.propTypes = {
  isTestStarted: PropTypes.bool,
  isTestFinished: PropTypes.bool,
  onTestStart: PropTypes.func.isRequired,
  onTestFinish: PropTypes.func.isRequired,
};

TestPage.defaultProps = {
  isTestStarted: false,
  isTestFinished: false,
};

export { TestPage };
