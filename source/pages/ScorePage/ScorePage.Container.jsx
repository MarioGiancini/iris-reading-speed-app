import React from 'react';

import { ScorePage } from './ScorePage';

const ScorePageContainer = ({ match }) => {
  const { readingSpeed: readingSpeedString } = match.params;
  const readingSpeed = Number(readingSpeedString);

  return (
    <ScorePage readingSpeed={readingSpeed} />
  );
};

export { ScorePageContainer as ScorePage };
