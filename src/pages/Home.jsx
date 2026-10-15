// Page d'accueil : bannière + liste des logements récupérés depuis l'API

import { useEffect, useState } from 'react'
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card'
import { getProperties } from '../services/api'
import bannerImg from '../assets/banner-home.png'
import './Home.css'

function Home() {
  // useState crée une variable "d'état" : quand elle change,
  // React ré-affiche automatiquement le composant.
  // [valeur, fonction pour la modifier] = useState(valeur de départ)
  const [properties, setProperties] = useState([]) // Liste des logements (vide au départ)
  const [isLoading, setIsLoading] = useState(true) // Chargement en cours ?
  const [error, setError] = useState(null)         // Message d'erreur éventuel

  // useEffect exécute du code APRÈS l'affichage du composant.
  // Le tableau vide [] signifie : "une seule fois, au premier affichage".
  useEffect(() => {
    getProperties()
      .then((data) => setProperties(data))        // Succès : on stocke les logements
      .catch((err) => setError(err.message))      // Échec : on stocke le message d'erreur
      .finally(() => setIsLoading(false))         // Dans tous les cas : fin du chargement
  }, [])

  return (
    <>
      <Banner image={bannerImg} title="Chez vous, partout et ailleurs" />

      {/* Message affiché pendant le chargement */}
      {isLoading && <p className="home__message">Chargement...</p>}

      {/* Message affiché en cas d'erreur (ex : back-end éteint) */}
      {error && <p className="home__message">{error}</p>}

      {/* La galerie n'est affichée que si le chargement est fini ET sans erreur */}
      {!isLoading && !error && (
        <section className="home__gallery">
          {/* .map() transforme chaque logement du tableau en composant <Card> */}
          {properties.map((property) => (
            <Card
              key={property.id} // key obligatoire : identifiant unique pour React
              id={property.id}
              title={property.title}
              cover={property.cover}
            />
          ))}
        </section>
      )}
    </>
  )
}

export default Home