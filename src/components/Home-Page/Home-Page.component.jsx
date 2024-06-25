import React from 'react';
import TriviaInput from '../Trivia-Input/Trivia-input.component';
import NumberOfQuestions from '../number-of-questions/number-of-questions.component';
import Submit from '../submit.component';
import TriviaContext from '../../contexts/user.context';
import { useContext } from 'react';

const sendOutValues = async () => {
    const {topic, setTopic} = useContext(TriviaContext);
    const {numQuestions, setNumQuestions} = useContext(TriviaContext);
    const API_KEY = 'private';
    const prompt = `Generate ${numQuestions} about the topic of ${topic} from easiest to hardest`;

    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 150,  // Adjust based on your needs
          n: numQuestions,
          stop: ["\n"]
        })
      });
    
      if (!response.ok) {
        throw new Error('Failed to fetch trivia questions');
      }
    
      const data = await response.json();
      return data.choices.map(choice => choice.text.trim());
    };

const HomePage = () => {
    return (
        <div className='flex items-start justify-center min-h-screen pt-40 text-3xl'>
            <div className='w-11/12 md:w-1/2 lg:w-1/3 flex flex-col'>
                <h1 className='text-green-500 mb-10 font-semibold text-4xl'>Trivia Quizzler</h1>
                <TriviaInput />
                <NumberOfQuestions />
                <Submit onClick={sendOutValues} />
            </div>
        </div>
    );
};

export default HomePage;
