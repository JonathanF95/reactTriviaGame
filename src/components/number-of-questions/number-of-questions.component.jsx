import React, { useState } from 'react';
import Button from '../button/button.component';


const NumberOfQuestions = () => {

   const [buttonValue, setButtonValue] = useState(null);
   
   const handleClick = (value) => {
    setButtonValue(value)
    

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
      <div className='mt-10' >
      <Button value='Start Trivia Quiz' fullWidth green whiteText />
      </div>
    </div>
  );
}

export default NumberOfQuestions;
