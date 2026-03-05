import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PirateQuiz from './components/PirateQuiz'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PirateQuiz />
  </StrictMode>,
)