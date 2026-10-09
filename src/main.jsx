// Point d'entrée de l'application : c'est le premier fichier exécuté

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css' // Styles globaux appliqués à toute l'application

// On récupère la <div id="root"> de index.html
// et React y affiche toute l'application
createRoot(document.getElementById('root')).render(
  // StrictMode : mode de développement qui signale les erreurs potentielles
  <StrictMode>
    {/* BrowserRouter active la navigation entre les pages (React Router) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)