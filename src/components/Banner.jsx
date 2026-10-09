import './Banner.css'

function Banner({ image, title }) {
  return (
    <section className="banner">
      <img src={image} alt="" className="banner__img" />
      {title && <h1 className="banner__title">{title}</h1>}
    </section>
  )
}

export default Banner