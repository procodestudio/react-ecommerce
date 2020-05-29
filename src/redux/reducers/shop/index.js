import types from '../../actions/types';

const INITIAL_STATE = {
  collections: [],
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.FECTH_COLLECTIONS_PENDING:
      return {
        ...state,
        isFetching: true,
      };

    case types.FECTH_COLLECTIONS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        collections: payload,
      };

    case types.FECTH_COLLECTIONS_REJECTED:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
