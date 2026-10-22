// Tests du composant Tag (composant SANS state)

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Tag from './Tag'

describe('Tag', () => {
  it('affiche le texte reçu en prop', () => {
    // Tag renvoie un <li> : on l'affiche dans un <ul> pour respecter le HTML
    render(
      <ul>
        <Tag label="Montmartre" />
      </ul>
    )
    expect(screen.getByText('Montmartre')).toBeInTheDocument()
  })

  it('est un élément de liste avec la classe tag', () => {
    render(
      <ul>
        <Tag label="Paris 10e" />
      </ul>
    )
    const tag = screen.getByRole('listitem')
    expect(tag).toHaveClass('tag')
  })
})