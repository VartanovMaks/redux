import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';

function App() {

  //const store = useSelector((store)=>{ Это мы получаем весь стор

  // const counter = useSelector(({counter})=>{
  // console.log(' useSelector in APP', counter);
  //   return counter
  // })
  
  const counter = useSelector(({counter})=>counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>
        {`Counter : ${counter}`}
      </h1>
      <button onClick={()=>dispatch({type:'INC'})}>increment</button>
      <button onClick={()=>dispatch({type:'DEC'})}>decrement</button>
      <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
    </div>
  );
}

export default App;
