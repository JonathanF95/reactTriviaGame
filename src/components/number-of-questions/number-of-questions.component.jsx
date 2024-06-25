import React, { useContext, useState } from 'react';
import Button from '../button/button.component';
import TriviaContext from '../../contexts/user.context';




const NumberOfQuestions = () => {

   const {numQuestions, setNumQuestions} = useContext(TriviaContext);
   
   const handleClick = (value) => {
    setNumQuestions(value)
    

   }

  return (
    <div>
      <h2 className='font-semibold'>Step Two:</h2>
      <h3 className='mb-5'>How many questions should I include?</h3>
      <div className='flex justify-between'>
        <Button value={3} onClick={handleClick} />
        <Button value={5} onClick={handleClick} />
        <Button value={10} onClick={handleClick} />
      </div>
    </div>
  );
}

export default NumberOfQuestions;
