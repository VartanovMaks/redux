import React from 'react';
import {useParams} from 'react-router-dom';

export const ProductDetails =  ()=>{
    const params = useParams();
    console.log(params);

    return (
        <div className='product-item'>
            test
          {/* <Product product={} /> */}
        </div>
    )  
}
  
  
  
  