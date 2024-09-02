import React from 'react'

function Button({addToCartTrue, children}) {
    const AddToCart ='border-red border-2 bg-white'
    const quantityClass = 'bg-yellow-400'


    const buttonClass = 'bottom-5 px-4 bg-white font-semibold  py-2 rounded-[1.4rem]';



  return (
    <div>
      <button className={`${buttonClass} ${ addToCartTrue ? AddToCart : quantityClass}`}>
        {children}
        </button>
    </div>
  )
}

export default Button
