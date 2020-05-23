import types from '../index';

const setCurrentUser = (user) => ({
  type: types.SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
