import React from 'react'
import ProductCard from '../components/ProductCard'
import data from '../data.json'
import emptyCart from '../assets/img/illustration-empty-cart.svg'



function ProductPage() {
  return (
    <div className='w-[90%] max-w-[1440px] pb-[2rem] mx-auto'>
      <div className='pt-[3rem] pb-[5rem]'>
        <h2 className='mb-4 font-bold text-[2rem]'>Desserts</h2>
        <ProductCard data={data}/>
      </div>
      
      <div className='rounded-lg p-8 bg-rose-50'> 
        <h5 className='mb-4 text-[1.5rem] font-bold text-red'>Your Cart (0)</h5>
        <div className='flex justify-center items-center flex-col p-4 gap-4'>
          <img src={emptyCart} alt='empty cart illustration'/>
          <small className='font-bold text-[1.2rem] text-rose-300'>Your addded items will appear here</small>  
        </div>
        
      </div>
    </div>
  )
}

export default ProductPage
