import React from 'react';
import Button from '../button/button.component';

const NumberOfQuestions = () => {
  return (
    <div>
      <h2>Step Two:</h2>
      <h3>How many questions should I include?</h3>
      <div>
        <Button number={3} />
        <Button number={5} />
        <Button number={10} />
      </div>
    </div>
  );
}

export default NumberOfQuestions;
