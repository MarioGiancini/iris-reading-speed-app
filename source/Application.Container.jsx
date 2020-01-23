import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';

import { Application } from './Application';

const ApplicationContainer = ({ isTestStarted, isTestFinished, startReadingTest, finishReadingTest }) => (
  <Application
    isTestStarted={isTestStarted}
    isTestFinished={isTestFinished}
    onTestStart={startReadingTest}
    onTestFinish={finishReadingTest}
  />
);

ApplicationContainer.propTypes = {
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
  isTestStarted: Boolean(app.startTime),
  isTestFinished: Boolean(app.startTime && app.finishTime),
});

const ConnectedApplicationContainer = connect(
  mapStateToProps,
  { ...actions.app },
)(ApplicationContainer);

export { ConnectedApplicationContainer as Application };
