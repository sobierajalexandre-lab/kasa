// Carte d'un logement sur la page d'accueil

import { Link } from 'react-router-dom'
import './Card.css'

// Props reçues : l'id, le titre et l'image de couverture du logement
function Card({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card