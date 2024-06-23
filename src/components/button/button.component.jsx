import React from 'react'

const Button = ({value, onClick, fullWidth, green, whiteText}) => {

  const buttonClasses = `py-5 px-20 bg-gray-200 rounded cursor-pointer hover:scale-105 ${
    fullWidth ? 'w-full' : ''
  } ${green ? 'bg-green-500 hover:bg-green-400' : 'hover:bg-gray-400'} ${whiteText ? 'text-white' : ''}`;

  return (
    <div className='flex justify-between'>
        <button onClick={(e) => 
          onClick({value}) 

           (e.target.style.backgroundColor='#9CA3AF')
          } 
          className={buttonClasses}>
            {value}
        </button>
    </div>
  )
}

export default Button;
