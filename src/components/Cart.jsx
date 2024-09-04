import React, { useState } from 'react'
import emptyCart from '../assets/img/illustration-empty-cart.svg'
import { useDispatch, useSelector } from 'react-redux'

import deleteItem from '../assets/img/icon-remove-item.svg'
import carbonDelivery from '../assets/img/icon-carbon-neutral.svg'
import { removeItem } from '../redux/cartReducer'
import Button from './Button'
import CheckOutPage from './CheckOutPage'

function Cart() {

    const dispatch = useDispatch();

    const [checkOutModal, setCheckOutModal] = useState(false)

    const products = useSelector(state => state.cart.products)
    

    const totalPrice = () =>{ 
        let total = 0; 
        products.forEach((item)=>(total += item.quantity * item.price))
        return total.toFixed(2)
    }

    const handleCheckOutModal = ()=>{ 
        setCheckOutModal(!checkOutModal)
    }


  return (
    
      <div className='rounded-lg py-8 px-4 bg-white'> 
       <h5 className='mb-4 text-[1.3rem] font-bold text-red'>Your Cart ({products.length})</h5> 
   
    <div className='flex flex-col gap-4'>
    {
    products && products.length > 0  ?  
            products?.map((item, index) => (
                    <div className=''  key={index} >
                        
                         <div className='w-full flex gap-4 flex-col border-b-2 border-b-bg-rose-300'>
                           
                            <div className= 'pb-1 flex flex-row justify-between items-center'>
                            <div className='w-[11rem]'>
                                <h4 className='truncate max-w-[12remr] mb-2 font-bold text-[1.1rem]'>{item.name}</h4>
                                <small className='text-[1rem]'><span className='text-red font-semibold'>{item.quantity}x</span>&nbsp;&nbsp; <span> @ ${(item.price).toFixed(2)}</span>  &nbsp;&nbsp; <span> ${(item.price * item.quantity).toFixed(2)}</span></small>
                            </div>
                            <div className='w-[2rem] flex justify-end'>       
                                <img src={deleteItem} alt='delete item icon' className='cursor-pointer rounded-[50%] border-bg-rose-200 w-4 h-4 border-2' onClick={()=> dispatch(removeItem(item.id))}/>
                            </div>
                        </div>
                       
                        </div>

                        
                   
                        </div>
                        
                        
            ))   : <div>
        
          <div className='flex justify-center items-center flex-col p-4 gap-4'>
            <img src={emptyCart} alt='empty cart illustration' />
            <small className='font-bold text-[1rem] text-rose-300 text-center'>Your addded items will appear here</small>  
          </div>
        </div> 
        
      }

    </div>

    { products.length > 0 && 
    <>
        <p className='w-full py-6 items-center flex justify-between font-semibold'>Order Total: <span className='font-bold text-[1.3rem]'>${totalPrice()}</span> </p>

        <div className='flex flex-row mb-6 justify-between py-4 bg-rose-50 px-4 rounded-md items-center'>
            <img src={carbonDelivery} alt="carbon delivery" />

            <p className=' font-semibold text-[.7rem]'>This is a <span className='font-bold'>
                carbon-neutral</span> delivery</p>
                
        </div>
        <Button
        onClick={()=>setCheckOutModal(!checkOutModal)}
         className='w-[100%] text-white bg-red border-0'>
        Confirm Order
        </Button>
    </>

        
      
}

        {checkOutModal && <CheckOutPage products={products}
        checkOutModal={handleCheckOutModal}
        price={totalPrice}/>
    }
   </div>
    
  )
}

export default Cart
