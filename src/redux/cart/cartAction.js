import {
  ADD_CART,
  REMOVE_CART,
  DECREASE_CART,
  INCREASE_CART,
  SHOW_CART,
  SHOW_CHECKOUT,
} from "./cartType";

export const addToCart = (product, price) => {
  return {
    type: ADD_CART,
    payload: product,
    price: price,
  };
};
export const removeFromCart = (productId) => {
  return {
    type: REMOVE_CART,
    payload: {
      productId: productId,
    },
  };
};
export const increaseCartQuantity = (id, quantity, price) => {
  return {
    type: INCREASE_CART,
    id,
    quantity,
    price,
  };
};
export const decreaseCartQuantity = (id, quantity, price) => {
  return {
    type: DECREASE_CART,
    id,
    quantity,
    price,
  };
};
export const removeCart = (id, quantity, price) => {
  return {
    type: REMOVE_CART,
    id,
    quantity,
    price,
  };
};
export const showCart = () => {
  return {
    type: SHOW_CART,
  };
};
export const ShowCheck = () => {
  return {
    type: SHOW_CHECKOUT,
  };
};

export const RemoveCart = (id, quantity, price) => {
  return (dispatch) => {
    if (quantity > 1) {
      dispatch(decreaseCartQuantity(id, quantity, price));
    } else {
      dispatch(removeCart(id, quantity, price));
    }
  };
};
