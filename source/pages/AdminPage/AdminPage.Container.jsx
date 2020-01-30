import React from 'react';
import { connect } from 'react-redux';

import { actions } from 'store';

import { AdminPage } from './AdminPage';

const AdminPageContainer = ({ signout, fetchResults }) => {
  React.useEffect(() => {
    fetchResults();
  }, []);

  return (
    <AdminPage onSignout={signout} />
  );
};

const ConnectedAdminPageContainer = connect(
  null,
  { ...actions.app, ...actions.results },
)(AdminPageContainer);

export { ConnectedAdminPageContainer as AdminPageContainer };
