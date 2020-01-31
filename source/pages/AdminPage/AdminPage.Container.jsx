import React from 'react';
import { connect } from 'react-redux';

import { actions } from 'store';

import { AdminPage } from './AdminPage';

const AdminPageContainer = ({ results, signout, fetchResultsList }) => {
  React.useEffect(() => {
    fetchResultsList();
  }, []);

  return (
    <AdminPage results={results} onSignout={signout} />
  );
};

const mapStateToProps = ({ results }) => ({
  results: results.list,
});

const ConnectedAdminPageContainer = connect(
  mapStateToProps,
  { ...actions.auth, ...actions.results },
)(AdminPageContainer);

export { ConnectedAdminPageContainer as AdminPageContainer };
