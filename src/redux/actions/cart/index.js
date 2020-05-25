import types from '../types';

const toggleCartHidden = () => ({
  type: types.TOGGLE_CART_HIDDEN,
});

const addItemToCart = (item) => ({
  type: types.ADD_ITEM_TO_CART,
  payload: item,
});

const clearItemFromCart = (item) => ({
  type: types.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export { toggleCartHidden, addItemToCart, clearItemFromCart };
