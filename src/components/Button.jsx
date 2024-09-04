import React from 'react'

function Button({children, onClick, className}) {
    

  return (
    
      <button onClick={onClick} className={`${className} flex flex-row items-center px-8 font-semibold rounded-[1.8rem] justify-center py-3 gap-[.5rem]`}>
        {children}
        </button>
    
  )
}

export default Button
