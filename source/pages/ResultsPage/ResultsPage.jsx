import React from 'react';

import { ReadingScore } from 'Components';

const ResultsPage = ({ match }) => {
  const { readingSpeed: readingSpeedString } = match.params;
  const readingSpeed = Number(readingSpeedString);

  return (
    <div>
      <ReadingScore readingSpeed={readingSpeed} />
    </div>
  );
};

export { ResultsPage };
