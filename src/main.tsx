import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/tokens.css'
import './style.css'
import './styles/ui/styles.css'
import App from './App'
import { LikesProvider } from './context/LikesContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LikesProvider>
        <App />
      </LikesProvider>
    </BrowserRouter>
  </StrictMode>,
)