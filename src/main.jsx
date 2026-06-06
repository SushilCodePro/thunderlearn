import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const savedTheme = localStorage.getItem('thunderlearn-theme')
const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark'
document.documentElement.setAttribute('data-theme', theme)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
