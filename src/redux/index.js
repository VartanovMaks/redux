import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers';

const logger = (store)=>(next)=>(action)=> {
    next(action);
    console.log(store.getState());
}

const persister = (store)=>(next)=>(action)=> {
    next(action)
    const {cart, wishlist} = store.getState();
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    localStorage.setItem('cart', JSON.stringify(cart))
}

const middlewares =[thunk, logger, 
    persister];
export const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)