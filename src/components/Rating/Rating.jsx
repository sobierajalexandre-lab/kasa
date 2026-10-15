// Affiche la note du logement sous forme d'étoiles
// Composant SANS state
// a voir avec Maxime si j'exporte un icone

import './Rating.css'

const MAX_RATING = 5

function Rating({ value }) {
  return (
    <div className="rating" role="img" aria-label={`Note : ${value} sur ${MAX_RATING}`}>
      {/* Array.from crée un tableau de 5 éléments pour générer 5 étoiles.
          index va de 0 à 4 : l'étoile est rouge si index < note */}
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <svg
          key={index}
          className={`rating__star ${index < value ? 'rating__star--active' : ''}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default Rating