// Affiche le nom et la photo de l'hôte
// Composant SANS state

import './Host.css'

function Host({ name, picture }) {
  // La maquette affiche le prénom et le nom sur deux lignes.
  // split(' ') découpe "Nathalie Jean" en ["Nathalie", "Jean"]
  // ...lastName récupère tout le reste (utile pour les noms composés)
  const [firstName, ...lastName] = name.split(' ')

  return (
    <div className="host">
      <p className="host__name">
        {firstName}
        <br />
        {lastName.join(' ')}
      </p>
      <img src={picture} alt={name} className="host__picture" />
    </div>
  )
}

export default Host