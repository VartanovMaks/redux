import {applyMiddleware, createStore, Middleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers';
import { INC_CUSTOM,
    INC,
    DEC,
    RESET 
} from './action-types';

const logger = (store)=>(next)=>(action)=> {
    
    const result = next(action);
    console.log(store.getState());
}
const protectCounter = (store)=>(next)=>(action)=> {
    const actionsForCounter =[ INC_CUSTOM,
        INC,
        DEC,
        RESET
    ]
    const {isAllowedToChange} = store.getState().counter1
    if (!isAllowedToChange && actionsForCounter.includes(action.type)){
        console.log('You cann\'t modify counter' );
        return
    }
    next(action)
}
const persister = (store)=>(next)=>(action)=> {
    
    next(action)
    const {counter1} = store.getState();
    localStorage.setItem('counter1', JSON.stringify(counter1))
}
const customThunk = (store) => (next) =>(action) =>{
    if(typeof action === 'function'){
        action(store.dispatch)
    } else {
        next(action)
    }

}

const middlewares =[customThunk, protectCounter, 
    // logger, 
    persister];
export const store = createStore(

    reducer,
    applyMiddleware(...middlewares)
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)