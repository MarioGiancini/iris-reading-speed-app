import firebase from 'firebase/app';

const signout = () => (
  firebase.auth().signOut()
);

export { signout };
