import React from 'react';
import './App.css';
import {Header,Products} from './Component'

function App() {

  return (
    <div className="App">
      <Header />
      {/* {!(counter1 %2) && <PhotosList />} */}
      <Products />
      {/* <h1>
        {`Counter 1 : ${counter1}`}
      </h1>
      <h1>
        {`Counter 2 : ${counter2}`}
      </h1>
      <button onClick={()=>dispatch(incCustomAction(102))}>inc custom</button>
      <button onClick={()=>dispatch(incAction())}>increment</button>
      <button onClick={()=>dispatch(decAction())}>decrement</button>
      <button onClick={()=>dispatch(reset())}>reset</button> */}
    </div>
  );
}

export default App;
