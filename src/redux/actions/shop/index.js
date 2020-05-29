import types from '../types';

const updateCollections = (collections) => ({
  type: types.UPDATE_COLLECTIONS,
  payload: collections,
});

export default updateCollections;
