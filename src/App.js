import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incCustomAction,
        incAction,
        decAction,
        reset} from './redux/action-creators'


function App() {
  

  
  const counter = useSelector(({counter})=>counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
        {`Counter : ${counter}`}
      </h1>
      <button onClick={()=>dispatch(incCustomAction(102))}>inc custom</button>
      <button onClick={()=>dispatch(incAction())}>increment</button>
      <button onClick={()=>dispatch(decAction())}>decrement</button>
      <button onClick={()=>dispatch(reset())}>reset</button>
    </div>
  );
}

export default App;
