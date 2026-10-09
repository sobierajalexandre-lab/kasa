// En-tête du site : logo + menu de navigation

import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg' // Vite transforme l'import en chemin d'image
import './Header.css'

function Header() {
  return (
    <header className="header">
      {/* Link : lien interne sans rechargement de la page (contrairement à <a>) */}
      <Link to="/">
        <img src={logo} alt="Kasa" className="header__logo" />
      </Link>

      <nav className="header__nav">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}

export default Header