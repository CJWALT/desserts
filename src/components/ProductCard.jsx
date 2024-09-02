
import React, { useState } from 'react'
import baklavaMobile from '../assets/img/baklava-mobile.jpg'
import Button from './Button'


function ProductList({data}) {

  const [addToCart, setAddToCart] = useState(true)

    
  return (
    
     <div className=''>
        {data?.map((items, index) => { 
          return (
            <div key={index} className='my-[1.3rem]'>
              <div className='relative flex justify-center mb-[1.6rem]'>
                <img src={baklavaMobile} alt="cookie" className='rounded-[1.2rem]' />
              <div className='absolute flex justify-center -bottom-4'>
                {addToCart ? <Button addToCartTrue={addToCart} children='Add to Cart' /> : <Button children='fill me' />}
              </div>
            </div>
            <div key={`info-${index}`}>
              <small className='text-[1rem]'>{items.category}</small>
              <h5 className='text-[1.2rem] font-semibold'>{items.name}</h5>
              <p className='text-[.9rem] font-semibold '>${items.price}</p>
            </div> 
            </div>
           
          );        
        })}
</div>
   
  )
}

export default ProductList
