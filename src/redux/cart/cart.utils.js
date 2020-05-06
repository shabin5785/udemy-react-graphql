export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    //find item, increase qty add to cartitem and return
    return cartItems.map(cartItem =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    //else add new item to cartitems, set quantity to 1 and return
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
};

export const reduceItemQuantity = (cartItems, cartItemToReduce) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToReduce.id
  );
  if (existingCartItem.quantity === 1) {
    //remove entire item.
    return cartItems.filter(cartItem => cartItem.id !== cartItemToReduce.id);
  } else {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToReduce.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};
