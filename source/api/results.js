import firebase from 'firebase/app';

import { database } from './base';

const sendResults = (readingSpeed) => (
  database.collection('results').add({
    readingSpeed,
    timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
  })
);

const fetchResults = async () => {
  const result = [];
  const response = await database
    .collection('results')
    .orderBy('timestamp', 'desc')
    .get();

  response.forEach(entry => {
    const data = entry.data();

    result.push({
      id: entry.id,
      value: data.readingSpeed,
      date: new Date(data.timestamp.seconds * 1000),
    });
  });

  return result;
};

const deleteResult = async (id) => {
  await database.collection('results').doc(id).delete();
};

export {
  sendResults,
  fetchResults,
  deleteResult,
};
