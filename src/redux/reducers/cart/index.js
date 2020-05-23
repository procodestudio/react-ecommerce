import types from '../../actions/types';
import addItemToCart from './utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { cartItems } = state;
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
        cartItems: addItemToCart(cartItems, payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
