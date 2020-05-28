import firebase from './index';

const firestore = firebase.firestore();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth) {
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
        console.log('Error creating user', error.message);
      }
    }

    return userRef;
  }

  return null;
};

export {
  firestore,
  createUserProfileDocument,
};
