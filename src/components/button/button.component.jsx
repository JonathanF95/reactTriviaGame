import React from 'react'

const Button = ({number}) => {
  return (
    <div className='w-full flex'>
        <button className='p-5 m-5 bg-gray-200 hover:bg-gray-300 rounded w-9/12 cursor-pointer hover:scale-105'>
            {number}
        </button>
    </div>
  )
}

export default Button;