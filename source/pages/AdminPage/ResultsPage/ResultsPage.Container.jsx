import React from 'react';
import types from 'prop-types';
import * as r from 'ramda';
import { connect } from 'react-redux';

import { actions } from 'store';
import { ResultsMap } from 'Types/Results';

import { ResultsPage } from './ResultsPage';

const ResultsPageContainerBase = ({
  results,
  fetchResults,
  deleteResultEntry,
}) => {
  React.useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return (
    <ResultsPage
      results={results}
      onDeleteResult={deleteResultEntry}
    />
  );
};

ResultsPageContainerBase.propTypes = {
  results: ResultsMap.isRequired,
  fetchResults: types.func.isRequired,
  deleteResultEntry: types.func.isRequired,
};

const mapStateToProps = ({ results }) => ({
  results: results.results,
});

const ResultsPageContainer = r.compose(
  connect(
    mapStateToProps,
    { ...actions.results },
  ),
)(ResultsPageContainerBase);

export { ResultsPageContainer as ResultsPage };
