import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { HeroesApp } from './HeroesApp.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HeroesApp />
  </BrowserRouter>,
)

