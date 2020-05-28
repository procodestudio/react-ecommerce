import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import CONFIG from './config';

firebase.initializeApp(CONFIG);

export default firebase;
