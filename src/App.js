import React, {useEffect, useState, setState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incCustomAction,
        incAction,
        decAction,
        reset,
        onUserLoaded,
        onAddToBad,
        onRemoveFromBad} from './redux/action-creators'

        const PhotosList = ()=>{

  const dispatch = useDispatch();
  const users = useSelector(({userReducer:{users}})=> users)
  const badEmployees = useSelector(({userReducer:{badEmployees}})=> badEmployees)


  const fetchPhotos = async ()=> {
    const resp = await fetch('https://dummyapi.io/data/api/user?limit=10',{
      headers:{ 'app-id':'lTE5abbDxdjGplutvTuc'}
      });
    const json = await resp.json();
    console.log(json.data);
    // dispatch({type:'ON_USERS_LOADED', payload:json.data})
    dispatch(onUserLoaded(json.data))
  }

  useEffect ( ()=>{
    if(!users.length){
      fetchPhotos() ;
    }
  },[])

  return (
    <div>
      {users.map(el=><img style={{filter:badEmployees.includes(el.id) ? 'blur(3px)' : ''}}
                          onClick={()=> {
                            const alreadyInList = badEmployees.includes(el.id)
                            dispatch(alreadyInList ? onRemoveFromBad(el.id) :
                            onAddToBad(el.id))}
                          } 
                          key={el.id} 
                          src={el.picture} 
                          alt={el.firstName}
                      ></img>)}
    </div>
  )
}


function App() {
  const {counter1, counter2}  = useSelector(({counter1, counter2})=>( {
    counter1:counter1.counter,
    counter2:counter2.counter,
  }));


  const dispatch = useDispatch();
  return (
    <div className="App">
      {!(counter1 %2) && <PhotosList />}
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
