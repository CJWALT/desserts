import React from 'react'
import ProductCard from '../components/ProductCard'
import data from '../data.json'
import Cart from '../components/Cart'



function ProductPage() {
  return (
    <div className='w-[90%] max-w-[1440px] pb-[2rem] mx-auto'>
      <div className='pt-[3rem] pb-[2rem]'>
        <h2 className='mb-4 font-bold text-[2.8rem]'>Desserts</h2>
        <ProductCard data={data}/>
      </div>
      
      <Cart />
    </div>
  )
}

export default ProductPage
