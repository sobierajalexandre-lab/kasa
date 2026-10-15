// Étiquette rouge affichant un mot-clé du logement
// Composant SANS state

import './Tag.css'

function Tag({ label }) {
  // <li> car les tags sont affichés dans une liste <ul>
  return <li className="tag">{label}</li>
}

export default Tag