import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {loadProducts,
        toggleItemInCart,
        toggleItemInWishlist
} from '../redux/action-creators'
import {Product} from './Product';

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
                <Product 
                    product={el}
                    key={el.id}
                    onCartClick={()=>dispatch(toggleItemInCart(el.id))}
                    onWishlistClick={()=>dispatch(toggleItemInWishlist(el.id))}
                    isInCart={productsInCart.includes(el.id)}
                    isInWishlist={productsInWishlist.includes(el.id)}
                />
            ))}
        </div> 
      )
  }
  
  
  