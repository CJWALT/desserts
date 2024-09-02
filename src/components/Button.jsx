import React from 'react'

function Button({children, onClick}) {
    

  return (
    <div>
      <button onClick={onClick} className='flex flex-row items-center px-8 font-semibold rounded-[1.8rem] border-rose-300 border-2 bg-white justify-center py-3 gap-[.5rem] bg-white'>
        {children}
        </button>
    </div>
  )
}

export default Button
