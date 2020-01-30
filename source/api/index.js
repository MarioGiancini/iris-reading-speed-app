import firebase from 'firebase/app';
/* eslint-disable import/no-extraneous-dependencies */
import '@firebase/auth';
import '@firebase/firestore';
/* eslint-enable import/no-extraneous-dependencies */

const configuration = {
  apiKey: 'AIzaSyCPgTpX8j8WDuJy92trCGaBvrEwgXn3LRU',
  authDomain: 'readingspeedapplication.firebaseapp.com',
  databaseURL: 'https://readingspeedapplication.firebaseio.com',
  projectId: 'readingspeedapplication',
  storageBucket: 'readingspeedapplication.appspot.com',
  messagingSenderId: '192922808262',
  appId: '1:192922808262:web:61d2e41a2e25080f494cc7',
};

firebase.initializeApp(configuration);

const database = firebase.firestore();

const signout = () => {
  firebase.auth().signOut();
  window.location.href = '/';
};

const sendResults = (readingSpeed) => {
  database.collection('results').add({
    readingSpeed,
    date: new Date(),
  });
};

const fetchResults = async () => {
  const result = [];
  const response = await database.collection('results').get();

  response.forEach(entry => {
    result.push(entry.data());
  });

  return result;
};

export {
  signout,
  sendResults,
  fetchResults,
};
