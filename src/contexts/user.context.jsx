// src/contexts/TriviaContext.js
import React, { createContext, useState } from 'react';

const TriviaContext = createContext();

export const TriviaProvider = ({ children }) => {
  const [topic, setTopic] = useState('');
  const [numQuestions, setNumQuestions] = useState(1);

  return (
    <TriviaContext.Provider value={{ topic, setTopic, numQuestions, setNumQuestions }}>
      {children}
    </TriviaContext.Provider>
  );
};

export default TriviaContext;
