// Page d'un logement : récupère l'id dans l'URL et affiche ses informations

import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getProperty } from '../services/api'
import Tag from '../components/Tag/Tag'
import Host from '../components/Host/Host'
import Rating from '../components/Rating/Rating'
import Collapse from '../components/Collapse/Collapse'
import './Property.css'

function Property() {
  // useParams récupère les paramètres de l'URL
  const { id } = useParams()

  const [property, setProperty] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  // Appel à l'API au chargement, et à nouveau si l'id change
  useEffect(() => {
    getProperty(id)
      .then((data) => setProperty(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [id])

  // Pendant le chargement
  if (isLoading) {
    return <p className="property__message">Chargement...</p>
  }

  // Erreur serveur (back-end éteint...)
  if (error) {
    return <p className="property__message">{error}</p>
  }

  // Logement inexistant : redirection vers la page 404
  // replace : remplace l'URL dans l'historique (le bouton "retour" ne ramène
  // pas vers la mauvaise URL)
  if (!property) {
    return <Navigate to="/404" replace />
  }

  return (
    <article className="property">
      {/* La Gallery viendra ici (partie 2) */}

      <div className="property__header">
        <div className="property__info">
          <h1 className="property__title">{property.title}</h1>
          <p className="property__location">{property.location}</p>
          <ul className="property__tags">
            {property.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </ul>
        </div>

        <div className="property__host-rating">
          <Host name={property.host.name} picture={property.host.picture} />
          <Rating value={Number(property.rating)} />
        </div>
      </div>

      <div className="property__collapses">
        <Collapse title="Description">
          <p>{property.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul className="property__equipments">
            {property.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </article>
  )
}

export default Property