import React from 'react'

import OrderConfirmed from '../assets/img/icon-order-confirmed.svg'
import Button from './Button'
import { resetItem } from '../redux/cartReducer'
import { useDispatch } from 'react-redux'

function CheckOutPage({products, checkOutModal}) {

    const dispatch = useDispatch()

    const handleStartNewOrder = ()=>{ 
        dispatch(resetItem())
        checkOutModal();
        
    }
  return (
    <div className='flex flex-col justify-end top-0 w-full h-[100vh] left-0 bg-rose-900 bg-opacity-50 fixed'>
        <div className="flex flex-col w-full px-6 py-4 bg-white rounded-md justify-center items-center">
          <div className='mb-4'>
          <img src={OrderConfirmed} className='w-8 h-8' alt='order confirmed'/>
          <h3 className='font-bold text-[2rem] leading-[2.6rem]'>Order Confirmed</h3>
          <p className='font-normal text-[.8rem] text-rose-300'>We hope you enjoy your food</p>
          </div>
           <div className='bg-rose-50 overflow-y-scroll mb-6 w-[100%] flex flex-col gap-4 p-4'>
            {products?.map((items, index)=>(
                <div key={index} className='flex items-center flex-row border-b-2 border-b-bg-rose-300 justify-between'>
                    <div>
                    <h4>{items.name}</h4>
                        <small className='text-[1rem]'>
                            <span className='mb-6 text-red font-semibold'>{items.quantity}x</span>&nbsp;&nbsp;<span>@ ${(items.price).toFixed(2)}</span></small>


                    </div>
                     
                            <div><span> ${(items.price * items.quantity).toFixed(2)}</span></div>
                    </div>
            ))}
           </div>
           <Button className='bg-red w-full text-white' onClick={handleStartNewOrder}>Start New Order</Button>
        </div>
        
    </div>
  )
}

export default CheckOutPage
