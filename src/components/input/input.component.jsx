import React from 'react'

const Input = ({value, onChange}) => {
  return (
    <div>
        <input type="text" className='border-gray-700 rounded border-solid bg-gray-200 w-full h-16' value={value} onChange={(e) => onChange(e.target.value)}/>
    </div>
  )
}

export default Input;