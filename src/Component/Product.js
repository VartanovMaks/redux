import React from 'react';

export const Product =  ({product, onCartClick, onWishlistClick, isInCart, isInWishlist})=>
      (
        <div key={product.id} className='product-item'>
          <h3>Article: {product.id}, {product.title}</h3>
          <p>Category: {product.category}</p>
          <img style={{maxWidth:'100px', height:'100px'}} src={product.image} alt={product.id}/>
          <p><span style={{fontSize:'24px', color:'blueviolet'}}>Price - </span>
              <span style={{fontSize:'30px', color:'red'}}>${product.price}</span>
          </p>
          <button style={{background: isInWishlist ? 'red' : ''}}
            onClick={onCartClick}
          > {isInWishlist ? 'Remove from wishlist': 'Add to wishlist'}</button>
          <button style={{background: isInCart ? 'red' : ''}}
            onClick={onWishlistClick}
          > {isInCart ? 'remove from cart': 'Add to cart'}</button>
          <hr/>
        </div>  
      )
  
  
  
  