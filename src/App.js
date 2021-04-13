import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incCustomAction,
        incAction,
        decAction,
        reset} from './redux/action-creators'


function App() {
  // можно сделать два отдельных, а ниже сделан один объект
  // const counter1 = useSelector(({counter1: {counter}})=>{
  //   return counter
  // });
  // const counter2 = useSelector(({counter2: {counter}})=>{
  //   return counter
  // });
  
  const {counter1, counter2}  = useSelector(({counter1, counter2})=>( {
    counter1:counter1.counter,
    counter2:counter2.counter,
  }));


  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        {`Counter 1 : ${counter1}`}
      </h1>
      <h1>
        {`Counter 2 : ${counter2}`}
      </h1>
      <button onClick={()=>dispatch(incCustomAction(102))}>inc custom</button>
      <button onClick={()=>dispatch(incAction())}>increment</button>
      <button onClick={()=>dispatch(decAction())}>decrement</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
