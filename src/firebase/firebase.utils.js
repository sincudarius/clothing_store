import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDFpJrBUNRPnuwXAPcoKBtJnhcv8DFt3VA',
  authDomain: 'crwn-db-a19d0.firebaseapp.com',
  databaseURL:
    'https://crwn-db-a19d0-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'crwn-db-a19d0',
  storageBucket: 'crwn-db-a19d0.appspot.com',
  messagingSenderId: '42463416899',
  appId: '1:42463416899:web:7b1e074a19d9359ad5baf6',
  measurementId: 'G-EW3ZCEKGHE',
};
// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
