import types from '../types';
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/actions';

const fetchCollections = () => {
  const collectionRef = firestore.collection('collections');

  const collections = collectionRef
    .get()
    .then((data) => (
      convertCollectionsSnapshotToMap(data)
    ));

  return {
    type: types.FECTH_COLLECTIONS,
    payload: collections,
  };
};

export default fetchCollections;
