import React from 'react'

const Button = ({number}) => {


  return (
    <div className='flex justify-between'>
        <button className='py-5 px-20 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer hover:scale-105'>
            {number}
        </button>
    </div>
  )
}

export default Button;