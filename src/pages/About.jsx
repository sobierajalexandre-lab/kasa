// Page À propos : bannière + liste des valeurs de Kasa

import Banner from '../components/Banner/Banner'
import Collapse from '../components/Collapse/Collapse'
import bannerImg from '../assets/banner-about.png'
import './About.css'

// Les données sont dans un tableau : on génère les Collapses avec .map()
// plutôt que d'écrire 4 fois le même code
const values = [
  {
    title: 'Fiabilité',
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: 'Respect',
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: 'Service',
    content: "La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.",
  },
  {
    title: 'Sécurité',
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function About() {
  return (
    <>
      {/* Pas de prop title : la bannière s'affiche sans texte */}
      <Banner image={bannerImg} />

      <section className="about__list">
        {values.map((value) => (
          <Collapse key={value.title} title={value.title}>
            <p>{value.content}</p>
          </Collapse>
        ))}
      </section>
    </>
  )
}

export default About