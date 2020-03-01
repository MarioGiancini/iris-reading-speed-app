import * as types from 'prop-types';

const ResultEntry = types.shape({
  id: types.string.isRequired,
  value: types.number.isRequired,
  date: types.instanceOf(Date).isRequired,
});

const ResultsMap = types.objectOf(ResultEntry);

export {
  ResultEntry,
  ResultsMap,
};
