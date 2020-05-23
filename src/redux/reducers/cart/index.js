import types from '../../actions/types';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case types.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
