import { createAction } from 'redux-act';

import * as api from 'api';

const fetchResultsSuccess = createAction('[results] fetch results success');

const fetchResults = () => async (dispatch) => {
  const results = await api.fetchResults();
  dispatch(fetchResultsSuccess(results));
};

export {
  fetchResults,
  fetchResultsSuccess,
};
