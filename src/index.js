import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

const initialState = {
  counter:0
}
const reducer = (state = initialState, action)=>{
  console.log('reducer', action);
  switch (action.type){
    case 'INC':{
      return {
        ...state,
        counter: state.counter+1
      }
    }
    case 'DEC':{
      return {
      ...state,
      counter: state.counter-1
      }
    }
    case 'RESET':{
      return {
        ...state,
        counter: 0
        }
    }
    default :
    return state;
  }
}
const store=createStore(reducer)

console.log(store);
store.subscribe(()=>{
  console.log('subscriber');
})

store.dispatch({type:'INC'})
console.log(store.getState());
store.dispatch({type:'INC'})
console.log(store.getState());
store.dispatch({type:'INC'})
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
