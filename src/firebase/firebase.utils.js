import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDFpJrBUNRPnuwXAPcoKBtJnhcv8DFt3VA',
  authDomain: 'crwn-db-a19d0.firebaseapp.com',
  projectId: 'crwn-db-a19d0',
  storageBucket: 'crwn-db-a19d0.appspot.com',
  messagingSenderId: '42463416899',
  appId: '1:42463416899:web:7b1e074a19d9359ad5baf6',
  measurementId: 'G-EW3ZCEKGHE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
