import React, {useEffect, useState, setState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incCustomAction,
        incAction,
        decAction,
        reset,
        onUserLoaded,
        onAddToBad,
        onRemoveFromBad,
        startProductsLoading,
        endProductsLoading,
        setProducts,
        loadProducts,
        toggleItemInCart
      } from './redux/action-creators'

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
                            const answer = !alreadyInList && window.confirm('Удалить человека?')
                            if (answer){
                              return dispatch(onAddToBad(el.id))
                            }
                            alreadyInList && dispatch(onRemoveFromBad(el.id))
                          }} 
                          key={el.id} 
                          src={el.picture} 
                          alt={el.firstName}
                      ></img>)}
    </div>
  )
}

const Products =  ()=>{
  const {products, isLoading}=useSelector(store=> store.products)
  const {productsInCart}=useSelector(store=> store.cart)
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(loadProducts())
  },[])

    return (
      <div className='product-wrapper'>
          {isLoading && (<h1 style={{color:'red'}}>Loading...</h1>)}
          {!isLoading && !!products.length && products.map(el=>(
            <div key={el.id} className='product-item'>
              <h3>Wine id: {el.id}, name: {el.wine}</h3>
              <h4>Produced by {el.winery}</h4>
              <p>Rating average : {el.rating.average}</p>
              <img style={{maxWidth:'100px', height:'100px'}} src={el.image} alt={el.wine}/>
              <p><span style={{fontSize:'24px', color:'blueviolet'}}>Price for bottle - </span>
                  <span style={{fontSize:'30px', color:'red'}}>${el.price}</span>
              </p>
              <button>Add to wishlist</button>
              <button style={{background: productsInCart.includes(el.id) ? 'red' : ''}}
                onClick={()=>dispatch(toggleItemInCart(el.id))}
              > {productsInCart.includes(el.id) ? 'remove from cart': 'Add to cart'}</button>
              <hr/>
            </div>  
          ))}
      </div> 
    )
}
const Header =()=>{
  return(
    <header>
      <h2>Header</h2>
      <div className='counters'>
        <span>
          Wishlist: 0
        </span>
        <span>
          Counter : 0
        </span>
      </div>
    </header>
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
