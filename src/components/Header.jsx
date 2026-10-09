import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Header.css'

function Header() {
  return (
    <header className="header">
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