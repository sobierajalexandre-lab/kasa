// Tests du composant Header : logo et navigation

import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Header from './Header'

// initialEntries simule l'URL sur laquelle se trouve l'utilisateur
function renderHeaderAt(url) {
  render(
    <MemoryRouter initialEntries={[url]}>
      <Header />
    </MemoryRouter>
  )
}

describe('Header', () => {
  it("le logo ramène à l'accueil", () => {
    renderHeaderAt('/')
    expect(screen.getByRole('link', { name: 'Kasa' })).toHaveAttribute('href', '/')
  })

  it('souligne "Accueil" sur la page d\'accueil', () => {
    renderHeaderAt('/')
    expect(screen.getByRole('link', { name: 'Accueil' })).toHaveClass('active')
    expect(screen.getByRole('link', { name: 'A Propos' })).not.toHaveClass('active')
  })

  it('souligne "A Propos" sur la page À propos', () => {
    renderHeaderAt('/about')
    expect(screen.getByRole('link', { name: 'A Propos' })).toHaveClass('active')
    expect(screen.getByRole('link', { name: 'Accueil' })).not.toHaveClass('active')
  })
})