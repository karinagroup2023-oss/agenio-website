import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import App from './App'

createRoot(document.getElementById('miniapp-root')).render(
  <StrictMode><App /></StrictMode>
)
