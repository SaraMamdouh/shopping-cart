import{ ADD_CART,REMOVE_CART,DECREASE_CART,INCREASE_CART, SHOW_CART,SHOW_CHECKOUT }from './cartType';


export const addToCart = (product,price) => {
    return {
        type: ADD_CART,
        payload:[product],
        price:price
        }
}
export const removeFromCart = (productId) => {
    return {
        type: REMOVE_CART,
        payload: {
            productId: productId
        }
    }
};
export const increaseCartQuantity = (id, count,price) => {
  return {
      type: INCREASE_CART,
      payload:id,
      count:count,
      price:price
  }
};
export const decreaseCartQuantity = (id,count,price) => {
    return {
        type: DECREASE_CART,
        payload:id,
        count:count,
        price:price
    }
  };
  export const removeCart = (id,count,price) => {
    return {
        type: REMOVE_CART,
        payload:id ,
      count:count,
      price:price
      
      }
  };
  export const showCart=()=>{
    return{
      type:SHOW_CART
    }
  }
  export const ShowCheck=()=>{
    return{
      type:SHOW_CHECKOUT
    }
  }

  export const RemoveCart =(id,count,price)=>{
      return (dispatch)=>{
        if(count>1){
          dispatch(decreaseCartQuantity(id,count,price));
            }
          else{
           dispatch(removeCart(id,count,price))
        
          }  
  }
}