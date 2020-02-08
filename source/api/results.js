import firebase from 'firebase/app';

import { database } from './base';

const sendResults = (readingSpeed) => (
  database.collection('results').add({
    readingSpeed,
    timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
  })
);

const setResultsLocation = (results, location) => (
  results.update({ location })
);

const fetchResultsList = async () => {
  const result = [];
  const response = await database
    .collection('results')
    .orderBy('timestamp', 'desc')
    .get();

  response.forEach(entry => {
    const data = entry.data();

    const { location } = data;
    const { latitude, longitude } = location || {};

    result.push({
      value: data.readingSpeed,
      date: new Date(data.timestamp.seconds * 1000),
      location: data.location && { latitude, longitude },
    });
  });

  return result;
};

export {
  sendResults,
  setResultsLocation,
  fetchResultsList,
};
