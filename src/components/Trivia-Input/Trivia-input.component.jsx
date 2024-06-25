import React, {useContext} from 'react'
import Input from '../input/input.component';
import TriviaContext from '../../contexts/user.context';

const TriviaInput = () => {

    const {topic, setTopic} = useContext(TriviaContext);

    const handleInput = (value) => {
        setTopic(value)
        
    }


  return(
    <div className='mb-4'>
        <h2 className='font-semibold'>Step One:</h2>
        <h3 className='mb-2'>Give me a topic for the quiz</h3>
        <Input value={topic} onChange={handleInput} />
    </div>
  )
}

export default TriviaInput;