import { database } from './base';

const sendResults = (readingSpeed) => {
  database.collection('results').add({
    readingSpeed,
    date: new Date(),
  });
};

const fetchResultsList = async () => {
  const result = [];
  const response = await database.collection('results').get();

  response.forEach(entry => {
    const data = entry.data();

    result.push({
      value: data.readingSpeed,
      date: new Date(data.date.seconds * 1000),
    });
  });

  return result;
};

export {
  sendResults,
  fetchResultsList,
};
