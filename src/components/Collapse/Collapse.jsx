// Menu déroulant réutilisable (page À propos + page Logement)
// Composant AVEC state : il mémorise s'il est ouvert ou fermé

import { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import './Collapse.css'

// Props :
// - title : le texte de la barre rouge
// - children : le contenu affiché à l'ouverture (texte, liste...)
function Collapse({ title, children }) {
  // Fermé par défaut, comme demandé dans le brief de Paul
  const [isOpen, setIsOpen] = useState(false)

  return (
    // La classe "collapse--open" est ajoutée seulement quand isOpen vaut true
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      {/* Un <button> plutôt qu'une <div> : accessible au clavier */}
      <button
        type="button"
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)} // Inverse l'état : ouvert <-> fermé
        aria-expanded={isOpen} // Indique l'état aux lecteurs d'écran
      >
        <span>{title}</span>
        <img src={arrow} alt="" className="collapse__arrow" />
      </button>

      <div className="collapse__content">
        <div className="collapse__inner">
          <div className="collapse__text">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Collapse