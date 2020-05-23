import types from '../types';

const toggleCartHidden = () => ({
  type: types.TOGGLE_CART_HIDDEN,
});

const addItemToCart = (item) => ({
  type: types.ADD_ITEM_TO_CART,
  payload: item,
});

export { toggleCartHidden, addItemToCart };
