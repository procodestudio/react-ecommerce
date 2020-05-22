import firebase from './index';

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const signInWithGoogle = () => auth.signInWithRedirect(provider);

export { auth, signInWithGoogle };
