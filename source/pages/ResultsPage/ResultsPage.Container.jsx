import React from 'react';
import { connect } from 'react-redux';

import { actions } from 'store';

import { ResultsPage } from './ResultsPage';

const ResultsPageContainer = ({ match, sendReadingScoreToServer }) => {
  const { readingSpeed: readingSpeedString } = match.params;
  const readingSpeed = Number(readingSpeedString);

  React.useEffect(() => {
    // TODO:
    // don't send results on page load
    // becaues this will cause fake results when sharing
    sendReadingScoreToServer(readingSpeed);
  }, [readingSpeed, sendReadingScoreToServer]);

  return (
    <ResultsPage readingSpeed={readingSpeed} />
  );
};

const ConnectedResultsPageContainer = connect(null, { ...actions.app })(ResultsPageContainer);

export { ConnectedResultsPageContainer as ResultsPage };
