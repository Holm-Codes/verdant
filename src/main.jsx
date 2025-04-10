import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // 
  <StrictMode> {/* Den er kun til udvikling – hjælper med at finde fejl tidligt */}
    <App /> {/* Den er det komponent og view, der kører først og indeholder hele din router og navigation */}
  </StrictMode>,
)