import { combineReducers } from 'redux'
import cartReducer from './cart/cartReducer';
import FilterReducer from './filter/filterReducer';
import ProductReducer from './product/productReducer';

const rootReducer = combineReducers({
  product: ProductReducer,
  filter: FilterReducer,
  cart:cartReducer
})

export default rootReducer