// Tests du composant Gallery (composant AVEC state)

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Gallery from './Gallery'

// Fausses données : 3 photos (pas besoin de vraies images pour tester)
const pictures = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg']

describe('Gallery', () => {
  it('affiche la première photo et le compteur 1/3', () => {
    render(<Gallery pictures={pictures} title="Appartement cosy" />)

    const image = screen.getByRole('img', { name: /photo 1 sur 3/i })
    expect(image).toHaveAttribute('src', 'photo1.jpg')
    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('passe à la photo suivante au clic sur "suivant"', () => {
    render(<Gallery pictures={pictures} title="Appartement cosy" />)

    fireEvent.click(screen.getByRole('button', { name: 'Image suivante' }))

    expect(screen.getByRole('img', { name: /photo 2 sur 3/i })).toHaveAttribute('src', 'photo2.jpg')
    expect(screen.getByText('2/3')).toBeInTheDocument()
  })

  it('revient à la photo précédente au clic sur "précédent"', () => {
    render(<Gallery pictures={pictures} title="Appartement cosy" />)

    fireEvent.click(screen.getByRole('button', { name: 'Image suivante' }))   // photo 2
    fireEvent.click(screen.getByRole('button', { name: 'Image précédente' })) // retour photo 1

    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('revient à la première photo après la dernière', () => {
    render(<Gallery pictures={pictures} title="Appartement cosy" />)
    const next = screen.getByRole('button', { name: 'Image suivante' })

    fireEvent.click(next) // 2/3
    fireEvent.click(next) // 3/3
    fireEvent.click(next) // retour à 1/3

    expect(screen.getByText('1/3')).toBeInTheDocument()
  })

  it('va à la dernière photo en cliquant "précédent" sur la première', () => {
    render(<Gallery pictures={pictures} title="Appartement cosy" />)

    fireEvent.click(screen.getByRole('button', { name: 'Image précédente' }))

    expect(screen.getByText('3/3')).toBeInTheDocument()
  })

  it("n'affiche ni flèches ni compteur s'il n'y a qu'une photo", () => {
    render(<Gallery pictures={['seule.jpg']} title="Studio" />)

    // queryBy renvoie null si l'élément n'existe pas (getBy ferait échouer le test)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByText('1/1')).not.toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'seule.jpg')
  })

  it("n'affiche rien s'il n'y a aucune photo", () => {
    const { container } = render(<Gallery pictures={[]} title="Studio" />)

    expect(container).toBeEmptyDOMElement()
  })
})