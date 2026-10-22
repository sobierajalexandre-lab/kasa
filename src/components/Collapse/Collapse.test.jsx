// Tests du composant Collapse (composant AVEC state)

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Collapse from './Collapse'

describe('Collapse', () => {
  it('affiche le titre reçu en prop', () => {
    render(<Collapse title="Fiabilité"><p>Contenu</p></Collapse>)
    expect(screen.getByText('Fiabilité')).toBeInTheDocument()
  })

  it('affiche le contenu passé en children', () => {
    render(<Collapse title="Fiabilité"><p>Texte de test</p></Collapse>)
    expect(screen.getByText('Texte de test')).toBeInTheDocument()
  })

  it('est fermé par défaut', () => {
    render(<Collapse title="Fiabilité"><p>Contenu</p></Collapse>)
    const button = screen.getByRole('button', { name: /fiabilité/i })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button.parentElement).not.toHaveClass('collapse--open')
  })

  it("s'ouvre au premier clic", () => {
    render(<Collapse title="Fiabilité"><p>Contenu</p></Collapse>)
    const button = screen.getByRole('button', { name: /fiabilité/i })

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button.parentElement).toHaveClass('collapse--open')
  })

  it('se referme au second clic', () => {
    render(<Collapse title="Fiabilité"><p>Contenu</p></Collapse>)
    const button = screen.getByRole('button', { name: /fiabilité/i })

    fireEvent.click(button) // ouvre
    fireEvent.click(button) // referme

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(button.parentElement).not.toHaveClass('collapse--open')
  })
})