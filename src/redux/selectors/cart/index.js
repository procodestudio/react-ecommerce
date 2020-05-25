import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);

const selectCartItemsCount = createSelector(
  [selectCartItems],
  (items) => (
    items.reduce((acc, item) => acc + item.quantity, 0)
  ),
);

export {
  selectCartItems,
  selectCartHidden,
  selectCartItemsCount,
};
