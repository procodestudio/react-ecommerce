const addOrRemove = (itemsList, actionItem, action) => {
  const existingCartItem = itemsList.find((item) => item.id === actionItem.id);

  if (existingCartItem) {
    return itemsList
      .filter((cartItem) => {
        if (action === 'remove' && existingCartItem.quantity === 1) {
          return cartItem.id !== actionItem.id;
        }

        return cartItem;
      })
      .map((cartItem) => (
        cartItem.id === actionItem.id
          ? { ...cartItem, quantity: cartItem.quantity + (action === 'add' ? 1 : -1) }
          : cartItem
      ));
  }

  return [...itemsList, { ...actionItem, quantity: 1 }];
};

const addItemToCart = (cartItems, itemToAdd) => (
  addOrRemove(cartItems, itemToAdd, 'add')
);

const removeItemFromCart = (cartItems, itemToRemove) => (
  addOrRemove(cartItems, itemToRemove, 'remove')
);

const clearItemFromCart = (cartItems, itemToRemove) => (
  cartItems.filter((item) => item.id !== itemToRemove.id)
);

export { addItemToCart, removeItemFromCart, clearItemFromCart };
