// Tests du composant Rating (composant SANS state)

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Rating from './Rating'

describe('Rating', () => {
  it('annonce la note aux lecteurs d’écran', () => {
    render(<Rating value={3} />)
    expect(screen.getByRole('img', { name: 'Note : 3 sur 5' })).toBeInTheDocument()
  })

  it('affiche toujours 5 étoiles', () => {
    const { container } = render(<Rating value={3} />)
    expect(container.querySelectorAll('.rating__star')).toHaveLength(5)
  })

  it('colore autant d’étoiles que la note', () => {
    const { container } = render(<Rating value={4} />)
    expect(container.querySelectorAll('.rating__star--active')).toHaveLength(4)
  })
})
