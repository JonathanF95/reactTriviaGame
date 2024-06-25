import React from 'react'

const Submit = ({value}) => {
  return (
    <button onClick={() =>  onClick({value})} className='bg-green-400 hover:bg-green-500 hover:scale-105 w-full rounded mt-10 h-14 text-white'>Start Trivia Game</button>
  )
}

export default Submit;