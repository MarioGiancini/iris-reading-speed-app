import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';

import { Application } from './Application';

const ApplicationContainer = ({
  timeInMinutes,
  isTestStarted,
  isTestFinished,
  startReadingTest,
  finishReadingTest,
}) => (
  <Application
    timeInMinutes={timeInMinutes}
    isTestStarted={isTestStarted}
    isTestFinished={isTestFinished}
    onTestStart={startReadingTest}
    onTestFinish={finishReadingTest}
  />
);

ApplicationContainer.propTypes = {
  timeInMinutes: PropTypes.number,
  isTestStarted: PropTypes.bool,
  isTestFinished: PropTypes.bool,
  startReadingTest: PropTypes.func,
  finishReadingTest: PropTypes.func,
};

ApplicationContainer.defaultProps = {
  isTestStarted: false,
  isTestFinished: false,
};

const mapStateToProps = ({ app }) => ({
  timeInMinutes: (app.finishTime - app.startTime) / 1000 / 60,
  isTestStarted: Boolean(app.startTime),
  isTestFinished: Boolean(app.startTime && app.finishTime),
});

const ConnectedApplicationContainer = connect(
  mapStateToProps,
  { ...actions.app },
)(ApplicationContainer);

export { ConnectedApplicationContainer as Application };
