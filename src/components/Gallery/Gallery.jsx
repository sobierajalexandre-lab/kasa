// Carrousel de photos du logement
// Composant AVEC state : il mémorise quelle photo est affichée

import { useState } from 'react'
import arrow from '../../assets/gallery-arrow.svg'
import './Gallery.css'

// Props :
// - pictures : tableau des URL des photos
// - title : titre du logement (pour le texte alternatif des images)
function Gallery({ pictures, title }) {
  // Position de la photo affichée dans le tableau (0 = la première)
  const [currentIndex, setCurrentIndex] = useState(0)

  const total = pictures.length

  // Sécurité : s'il n'y a aucune photo, on n'affiche rien
  if (total === 0) {
    return null
  }

  // Photo précédente : si on est sur la première, on va à la dernière
  const showPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1)
  }

  // Photo suivante : si on est sur la dernière, on revient à la première
  const showNext = () => {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1)
  }

  return (
    <section className="gallery">
      <img
        src={pictures[currentIndex]}
        alt={`${title} - photo ${currentIndex + 1} sur ${total}`}
        className="gallery__img"
      />

      {/* Flèches et compteur affichés SEULEMENT s'il y a plus d'une photo */}
      {total > 1 && (
        <>
          <button
            type="button"
            className="gallery__btn gallery__btn--prev"
            onClick={showPrevious}
            aria-label="Image précédente"
          >
            <img src={arrow} alt="" className="gallery__arrow" />
          </button>

          <button
            type="button"
            className="gallery__btn gallery__btn--next"
            onClick={showNext}
            aria-label="Image suivante"
          >
            {/* Même image que la flèche gauche, retournée en CSS */}
            <img src={arrow} alt="" className="gallery__arrow" />
          </button>

          <p className="gallery__counter">
            {currentIndex + 1}/{total}
          </p>
        </>
      )}
    </section>
  )
}

export default Gallery