import React, {useState} from 'react'
import Input from '../input/input.component';

const TriviaInput = () => {

    const [input, setInput] = useState('');

    const handleInput = (value) => {
        setInput(value)
    }


  return(
    <div className='mb-4'>
        <h2 className='font-semibold'>Step One:</h2>
        <h3 className='mb-2'>Give me a topic for the quiz</h3>
        <Input value={input} onChange={handleInput} />
    </div>
  )
}

export default TriviaInput;