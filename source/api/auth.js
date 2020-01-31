import firebase from 'firebase/app';

const signin = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password)
);

const signout = () => (
  firebase.auth().signOut()
);

export { signin, signout };
