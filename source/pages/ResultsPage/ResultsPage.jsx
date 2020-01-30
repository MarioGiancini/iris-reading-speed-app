import React from 'react';
import PropTypes from 'prop-types';

import { ReadingScore } from 'Components';

const ResultsPage = ({ readingSpeed }) => (
  <ReadingScore readingSpeed={readingSpeed} />
);

ResultsPage.propTypes = {
  readingSpeed: PropTypes.number.isRequired,
};

export { ResultsPage };
