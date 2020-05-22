import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDqR11sgTZDSuoEQnGGjSDUBd_QHJy7WqI',
  authDomain: 'react-ecommerce-94258.firebaseapp.com',
  databaseURL: 'https://react-ecommerce-94258.firebaseio.com',
  projectId: 'react-ecommerce-94258',
  storageBucket: 'react-ecommerce-94258.appspot.com',
  messagingSenderId: '414041686285',
  appId: '1:414041686285:web:9f9e7a96809217b28d3044',
  measurementId: 'G-JT4ZH3BB19',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);

export default firebase;
