import { Link } from 'react-router-dom'
import './Card.css'

function Card({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className="card">
      <img src={cover} alt={title} className="card__img" />
      <h2 className="card__title">{title}</h2>
    </Link>
  )
}

export default Card