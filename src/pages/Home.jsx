import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import { getProperties } from '../services/api'
import bannerImg from '../assets/banner-home.png'
import './Home.css'

function Home() {
  const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProperties()
      .then((data) => setProperties(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <Banner image={bannerImg} title="Chez vous, partout et ailleurs" />

      {isLoading && <p className="home__message">Chargement...</p>}
      {error && <p className="home__message">{error}</p>}

      {!isLoading && !error && (
        <section className="home__gallery">
          {properties.map((property) => (
            <Card
              key={property.id}
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