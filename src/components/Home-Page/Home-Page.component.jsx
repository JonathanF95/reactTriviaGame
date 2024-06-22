import React from 'react';
import TriviaInput from '../Trivia-Input/Trivia-input.component';
import NumberOfQuestions from '../number-of-questions/number-of-questions.component';

const HomePage = () => {
    return (
        <div className='flex items-start justify-center min-h-screen pt-40'>
            <div className='w-11/12 md:w-1/2 lg:w-1/3 flex flex-col items-center'>
                <h1 className='text-green-500 mb-4'>Trivia Quizzler</h1>
                <TriviaInput />
                <NumberOfQuestions />
            </div>
        </div>
    );
};

export default HomePage;
