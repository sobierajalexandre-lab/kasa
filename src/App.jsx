// Composant principal : structure commune à toutes les pages + gestion des routes

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Property from './pages/Property'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    // Fragment (<>...</>) : permet de renvoyer plusieurs éléments
    // sans ajouter de <div> inutile dans le HTML
    <>
      {/* Le Header est affiché sur toutes les pages */}
      <Header />

      <main>
        {/* Routes : affiche UNE seule page selon l'URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* :id est un paramètre dynamique (l'identifiant du logement) */}
          <Route path="/property/:id" element={<Property />} />
          {/* "*" attrape toutes les URL qui ne correspondent à aucune route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Le Footer est affiché sur toutes les pages */}
      <Footer />
    </>
  )
}

export default App