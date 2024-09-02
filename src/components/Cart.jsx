import React from 'react'
import emptyCart from '../assets/img/illustration-empty-cart.svg'
import { useSelector } from 'react-redux'

function Cart() {

    const products = useSelector(state => state.cart.products)
    console.log(products)
  return (
    
      <div className='rounded-lg p-8 bg-rose-50'> 
      {

        products ?  
            products?.map((item, index) => (
                    <div key={index}> 
                        <h4>{item.title}</h4>
                        </div>
            ))  : <div>
        <h5 className='mb-4 text-[1.5rem] font-bold text-red'>Your Cart (0)</h5>
          <div className='flex justify-center items-center flex-col p-4 gap-4'>
            <img src={emptyCart} alt='empty cart illustration'/>
            <small className='font-bold text-[1rem] text-rose-300 text-center'>Your addded items will appear here</small>  
          </div>
        </div> 
        
      }
      
       
        
      </div>
    
  )
}

export default Cart
