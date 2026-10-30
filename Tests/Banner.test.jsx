// Tests du composant Banner (composant SANS state)

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Banner from '../src/components/Banner/Banner'

describe('Banner', () => {
  it('affiche le titre quand il est fourni', () => {
    render(<Banner image="banner.jpg" title="Chez vous, partout et ailleurs" />)
    expect(screen.getByRole('heading', { name: 'Chez vous, partout et ailleurs' })).toBeInTheDocument()
  })

  it("n'affiche pas de titre quand il n'est pas fourni", () => {
    render(<Banner image="banner.jpg" />)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it("affiche l'image reçue en prop", () => {
    const { container } = render(<Banner image="banner.jpg" />)
    // L'image a un alt vide (décorative) : on la cherche directement dans le HTML
    expect(container.querySelector('img')).toHaveAttribute('src', 'banner.jpg')
  })
})