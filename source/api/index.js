import firebase from 'firebase';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@firebase/firestore';

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

const sendResults = (readingSpeed) => {
  database.collection('results').add({
    readingSpeed,
    date: new Date(),
  });
};

export { sendResults };
