import types from '../types';

const setCurrentUser = (user) => ({
  type: types.SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
