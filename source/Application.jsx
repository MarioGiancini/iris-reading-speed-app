import React from 'react';
import PropTypes from 'prop-types';
import { Intent } from '@blueprintjs/core';

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

const Application = ({ isTestStarted, isTestFinished, onTestStart, onTestFinish }) => (
  <Container>
    <Article blurred={isTestStarted === false}>
      <p>
        How’s your reading challenge going so far? If your book pile is starting to collect dust,
        this is an excellent opportunity to learn how to speed read and meet your book goal for
        the year. Some people find that it is hard to believe that speed reading increases comprehension,
        but it’s true! Although it may seem like you miss a lot of information by reading quickly, you
        retain it better and improve your memory. One thing you never want to do and label as “speed reading”
        is reading bits and pieces of a document, textbook, or novel. After all, reading is an enjoyable
        activity, and you’ll hurt your understanding of the text when you try a quick shortcut to meet your goal.
      </p>

      <p>
        Speed reading is a balance between pace and comprehension. With the techniques described below,
        you can learn to read faster without sacrificing comprehension.
      </p>

      <h3>
        Familiarize yourself with the material
      </h3>

      <p>
        If you know the material, familiarizing yourself with it isn’t necessary. But if you are unfamiliar with it,
        you will want to get an idea of what it is. For example, if you are a lawyer and are reviewing information
        for a case you’ve been involved in for months, speed reading would be an effective way of going through
        documents, learn what is in them, and still get home in time to watch the Voice.
      </p>

      <p>
        If you are unfamiliar with the content, get familiar with it. Using the same example from above, a lawyer
        reading a new study about advancements in medicine that are promising in finding a cure for cancer might
        require some time reviewing the content. Many times you can read the abstract of an article or study and
        then begin to speed read.
      </p>

      <h3>
        Minimize Subvocalization
      </h3>

      <p>
        Subvocalization involves saying words in your head while reading. It slows you down and can hurt your reading
        comprehension. In a previous article, Speed Reading Tips: 5 Ways to Minimize Subvocalization, we suggested
        five ways to quiet your mind so you can read faster. If you haven’t already, try the following while
        speed reading:
      </p>

      <ul>
        <li>Use your hand to guide your eyes while reading.</li>
        <li>Distract yourself.</li>
        <li>Listen to music while reading.</li>
        <li>Use the AccelaReader RSVP Application.</li>
        <li>Force yourself to read faster than you usually would.</li>
      </ul>

      <p>
        While it is impossible to eliminate subvocalization, these ways will help reduce it and increase comprehension.
      </p>
    </Article>

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
      isTestStarted &&
      <FinishTestButton intent={Intent.SUCCESS} onClick={() => onTestFinish()}>
        Finish test
      </FinishTestButton>
    }

    {
      isTestFinished &&
      <div>test is finished</div>
    }
  </Container>
);

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
