import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';
import { ResultsMap } from 'Types/Results';

import { AdminPage } from './AdminPage';

const AdminPageContainerBase = ({
  results,
  signout,
  fetchResults,
  deleteResultEntry,
}) => {
  React.useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return (
    <AdminPage
      results={results}
      onSignout={signout}
      onDeleteResult={deleteResultEntry}
    />
  );
};

AdminPageContainerBase.propTypes = {
  results: ResultsMap.isRequired,
  signout: types.func.isRequired,
  fetchResults: types.func.isRequired,
  deleteResultEntry: types.func.isRequired,
};

const mapStateToProps = ({ results }) => ({
  results: results.results,
});

const AdminPageContainer = connect(
  mapStateToProps,
  {
    ...actions.auth,
    ...actions.results,
  },
)(AdminPageContainerBase);

export { AdminPageContainer };
