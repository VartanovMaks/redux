import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {loadProducts,
        toggleItemInCart,
        toggleItemInWishlist
} from '../redux/action-creators'

export const Products =  ()=>{
    const {products, isLoading}=useSelector(store=> store.products)
    const {productsInCart}=useSelector(store=> store.cart)
    const {productsInWishlist}=useSelector(store=> store.wishlist)
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
                <button style={{background: productsInWishlist.includes(el.id) ? 'red' : ''}}
                  onClick={()=>dispatch(toggleItemInWishlist(el.id))}
                > {productsInWishlist.includes(el.id) ? 'Remove from wishlist': 'Add to wishlist'}</button>
                <button style={{background: productsInCart.includes(el.id) ? 'red' : ''}}
                  onClick={()=>dispatch(toggleItemInCart(el.id))}
                > {productsInCart.includes(el.id) ? 'remove from cart': 'Add to cart'}</button>
                <hr/>
              </div>  
            ))}
        </div> 
      )
  }
  
  
  