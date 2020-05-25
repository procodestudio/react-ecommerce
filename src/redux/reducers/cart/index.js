import types from '../../actions/types';
import { addItemToCart, clearItemFromCart } from './utils';

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

    case types.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: clearItemFromCart(cartItems, payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
