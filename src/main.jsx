import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TriviaProvider } from './contexts/user.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TriviaProvider>
      <App />
      </TriviaProvider>
  </React.StrictMode>,
)
