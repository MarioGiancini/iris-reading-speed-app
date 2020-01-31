import * as types from 'prop-types';

const ResultEntry = types.shape({
  value: types.number.isRequired,
  date: types.instanceOf(Date).isRequired,
});

const ResultList = types.arrayOf(ResultEntry);

export {
  ResultEntry,
  ResultList,
};
