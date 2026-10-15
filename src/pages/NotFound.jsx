// Page 404 : affichée pour toute URL inconnue
// et pour un logement dont l'id n'existe pas

import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__code">404</h1>
      <p className="not-found__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      {/* Link : retour à l'accueil sans recharger la page */}
      <Link to="/" className="not-found__link">
        Retourner sur la page d'accueil
      </Link>
    </section>
  )
}

export default NotFound