import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { Intent } from '@blueprintjs/core';

import { getRandomArticle } from 'articles';

import { AdminPage, SigninPage, ResultsPage } from 'Pages';
import { Article } from 'Components';

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

const Application = ({ isTestStarted, isTestFinished, onTestStart, onTestFinish }) => {
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

  return (
    <Container>
      <Switch>
        <Route path="/" exact>
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
        </Route>

        <Route path="/results/:readingSpeed" component={ResultsPage} />

        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/admin" component={AdminPage} />
      </Switch>
    </Container>
  );
};

Application.propTypes = {
  isTestStarted: PropTypes.bool,
  isTestFinished: PropTypes.bool,
  onTestStart: PropTypes.func.isRequired,
  onTestFinish: PropTypes.func.isRequired,
};

Application.defaultProps = {
  isTestStarted: false,
  isTestFinished: false,
};

export { Application };
