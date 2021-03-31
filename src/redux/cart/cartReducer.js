import { ADD_CART, DECREASE_CART, INCREASE_CART, REMOVE_CART, SHOW_CART, SHOW_CHECKOUT } from "./cartType";

const initialState = {
    cart: [],
    total:0,
    showCart:false,
    showCheck:false
  };
  const cartReducer = (state = initialState, action) => {

      switch(action.type) {
        case SHOW_CART:
          return{
            ...state,
            showCart:!state.showCart
          }
          case SHOW_CHECKOUT:
            return{
              ...state,
              showCheck:!state.showCheck,
              showCart:false
            }
          case ADD_CART:
            let cart = action.payload.map(m=>
                {
                  return {...m,count:1}
              } )
              return {
                  ...state,
                  cart:[...state.cart,...cart],
                  total:state.total+action.price
                }
          case INCREASE_CART:
            return {
                ...state,
                cart: state.cart.map(item => {
                  if(item.id === action.payload ) {
                     return { ...item, count: item.count + 1}
                  }
                  return item;
                }),
                total:state.total+action.count*action.price
              }
              case DECREASE_CART:
                return {
                    ...state,
                    cart: state.cart.map(item => {
                      if(item.id === action.payload ) {
                         return { ...item, count: item.count - 1}
                      }
                      return item;
                    }),
                    total:state.total-action.price*(action.count-1)
                  }
          case REMOVE_CART:
              return {
                  ...state,
                  cart: state.cart.filter(item => item.id !== action.payload),
                  total:state.total-action.price*action.count
              };
          default:
              return state;
      }
  };
  export default cartReducer;