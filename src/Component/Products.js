import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import {loadProducts,
        toggleItemInCart,
        toggleItemInWishlist
} from '../redux/action-creators'
import {Product} from './Product';
const LIMIT_STEP = 5;

export const Products =  ()=>{
    const {products, isLoading}=useSelector(store=> store.products)
    const {productsInCart}=useSelector(store=> store.cart)
    const {productsInWishlist}=useSelector(store=> store.wishlist)
    const history=useHistory();
    const [currentLimit, setCurrentLimit]=useState(LIMIT_STEP)
    const dispatch = useDispatch();
    
  
    useEffect(()=>{
      dispatch(loadProducts({limit:currentLimit}))

    },[currentLimit])
  
      return (
        <div>
          <div className="product-wrapper">
              {isLoading && (<h1 style={{color:'red'}}>Loading...</h1>)}
              {!isLoading && !!products.length && products.map(el=>(
                  <div className='product-item'
                        key={el.id} 
                        onClick={()=> history.push(`/products/${el.id}`)}
                  >
                  <Product 
                      product={el}
                      onCartClick={()=>dispatch(toggleItemInCart(el.id))}
                      onWishlistClick={()=>dispatch(toggleItemInWishlist(el.id))}
                      isInCart={productsInCart.includes(el.id)}
                      isInWishlist={productsInWishlist.includes(el.id)}
                  />
                  </div>
              ))}
          </div> 
              <button onClick={()=> setCurrentLimit(prev => prev += LIMIT_STEP )}>Load more</button>
        </div>
      )
  }
  
  
  