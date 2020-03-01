import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';

import { TestPage } from './TestPage';

const TestPageContainer = ({
  isTestStarted,
  isTestFinished,
  startReadingTest,
  finishReadingTest,
}) => (
  <TestPage
    isTestStarted={isTestStarted}
    isTestFinished={isTestFinished}
    onTestStart={startReadingTest}
    onTestFinish={finishReadingTest}
  />
);

TestPageContainer.propTypes = {
  isTestStarted: types.bool,
  isTestFinished: types.bool,
  startReadingTest: types.func,
  finishReadingTest: types.func,
};

TestPageContainer.defaultProps = {
  isTestStarted: false,
  isTestFinished: false,
};

const mapStateToProps = ({ app }) => ({
  isTestStarted: Boolean(app.startTime),
  isTestFinished: Boolean(app.startTime && app.finishTime),
});

const TestPageContainerConnected = connect(
  mapStateToProps,
  { ...actions.app },
)(TestPageContainer);

export { TestPageContainerConnected as TestPageContainer };
