import { combineReducers } from 'redux';
import counter1Reducer from './counter-1-reducer'
import counter2Reducer from './counter-2-reducer'
import userReducer from './users-reducer'
import products from './products-reducer'
import cartReducer from './cart-reducer'
import wishlistReducer from './wishlist-reducer'

export const reducer = combineReducers({
  counter1:counter1Reducer,
  counter2:counter2Reducer ,
  userReducer,
  products,
  cart: cartReducer,
  wishlist: wishlistReducer,
})