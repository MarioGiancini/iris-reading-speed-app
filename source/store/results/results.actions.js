import { createActionWithStatuses } from 'utilities/store';

const fetchResults = createActionWithStatuses('[results] fetch results');
const deleteResultEntry = createActionWithStatuses('[results] delete result entry');

export {
  fetchResults,
  deleteResultEntry,
};
