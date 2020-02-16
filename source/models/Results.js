import * as types from 'prop-types';

const Location = types.shape({
  latitude: types.number.isRequired,
  longitude: types.number.isRequired,
});

const ResultEntry = types.shape({
  value: types.number.isRequired,
  date: types.instanceOf(Date).isRequired,
  location: Location,
});

const ResultList = types.arrayOf(ResultEntry);

export {
  Location,
  ResultEntry,
  ResultList,
};
