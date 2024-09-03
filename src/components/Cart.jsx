import React from 'react'
import emptyCart from '../assets/img/illustration-empty-cart.svg'
import { useDispatch, useSelector } from 'react-redux'

import deleteItem from '../assets/img/icon-remove-item.svg'
import { removeItem } from '../redux/cartReducer'

function Cart() {

    const dispatch = useDispatch();

    const products = useSelector(state => state.cart.products)
    

    const totalPrice = () =>{ 
        let total = 0; 
        products.forEach((item)=>(total += item.quantity * item.price))
        return total.toFixed(2)
    }


  return (
    
      <div className='rounded-lg p-8 bg-rose-50'> 
       <h5 className='mb-4 text-[1rem] border-2 border-red-400 font-bold text-red'>Your Cart ({products.length})</h5> 
      {

        products && products.length > 0  ?  
            products?.map((item, index) => (
                    <div key={index} className=''>
                        
                         <div className='w-full flex gap-4 flex-col border-2 border-red'>
                           
                            <div className= 'border-2 border-red-400 flex flex-row justify-between items-center'>
                             <div>
                        <h4>{item.name}</h4>
                        <small>{item.quantity} x @{item.price} ${item.price * item.quantity}</small>
                    </div>
                        <div>       
                            <img src={deleteItem} alt='delete item icon' onClick={()=> dispatch(removeItem(item.id))}/>
                        </div>
                        </div>
                       
                        </div>

                        
                   
                        </div>
                        
            ))  : <div>
        
          <div className='flex justify-center items-center flex-col p-4 gap-4'>
            <img src={emptyCart} alt='empty cart illustration' />
            <small className='font-bold text-[1rem] text-rose-300 text-center'>Your addded items will appear here</small>  
          </div>
        </div> 
        
      }

<p>Order Total: {totalPrice()} </p>
      
       
        
      </div>
    
  )
}

export default Cart
