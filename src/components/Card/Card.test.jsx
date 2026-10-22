// Tests du composant Card (composant SANS state)

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Card from './Card'

// Card contient un <Link> : il a besoin d'un routeur pour fonctionner.
// MemoryRouter est un routeur "en mémoire", idéal pour les tests.
function renderCard() {
  render(
    <MemoryRouter>
      <Card id="abc123" title="Appartement cosy" cover="cover.jpg" />
    </MemoryRouter>
  )
}

describe('Card', () => {
  it('affiche le titre du logement', () => {
    renderCard()
    expect(screen.getByText('Appartement cosy')).toBeInTheDocument()
  })

  it("affiche l'image de couverture avec un texte alternatif", () => {
    renderCard()
    const image = screen.getByRole('img', { name: 'Appartement cosy' })
    expect(image).toHaveAttribute('src', 'cover.jpg')
  })

  it('mène vers la page du logement', () => {
    renderCard()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/property/abc123')
  })
})