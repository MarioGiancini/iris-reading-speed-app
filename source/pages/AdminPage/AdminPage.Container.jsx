import React from 'react';
import types from 'prop-types';
import { connect } from 'react-redux';

import { actions } from 'store';

import { AdminPage } from './AdminPage';

const AdminPageContainerBase = ({
  signout,
}) => (
  <AdminPage onSignout={signout} />
);

AdminPageContainerBase.propTypes = {
  signout: types.func.isRequired,
};

const mapStateToProps = ({ results }) => ({
  results: results.results,
});

const AdminPageContainer = connect(
  mapStateToProps,
  { ...actions.auth },
)(AdminPageContainerBase);

export { AdminPageContainer as AdminPage };
