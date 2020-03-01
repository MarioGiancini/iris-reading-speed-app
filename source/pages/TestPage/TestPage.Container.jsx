import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';

import { TestPage } from './TestPage';

const TestPageContainerBase = ({
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

TestPageContainerBase.propTypes = {
  isTestStarted: types.bool,
  isTestFinished: types.bool,
  startReadingTest: types.func,
  finishReadingTest: types.func,
};

TestPageContainerBase.defaultProps = {
  isTestStarted: false,
  isTestFinished: false,
};

const mapStateToProps = ({ app }) => ({
  isTestStarted: Boolean(app.startTime),
  isTestFinished: Boolean(app.startTime && app.finishTime),
});

const TestPageContainer = connect(
  mapStateToProps,
  { ...actions.app },
)(TestPageContainerBase);

export { TestPageContainer as TestPage };
