import image from '../../public/img/nosotros.jpg'
import styles from '~/styles/us.css'

export function meta() {
  return [
    {title: "Guitar LA - Sobre Nosotros"},
    {description: "Venta de guitarras, blog de música"}
  ]
}

export function links() {
  return [
      {
          rel: 'stylesheet',
          href: styles,
      },
      {
        rel: 'preload',
        href: image,
        as: 'image',
      }
  ]
}


const Nosotros = () => {
  return (
    <main className="container us">
      <h2 className="heading">Nosotros</h2>

      <div className="content">
        <img className='us-image' src={image} alt='Imagen Nosotros' />

        <div className='us-description'>
          <p>Donec a enim vitae enim rutrum porta vitae in purus. Fusce bibendum non dui quis blandit. Donec eu erat nisi. Donec ullamcorper, neque sit amet rhoncus vulputate, nisl erat tempus lacus, non dapibus enim mi ut mi. Proin dictum tincidunt metus. Duis tristique semper massa a pretium. Quisque sed faucibus nisl. Curabitur vel varius justo. Sed convallis, justo vel vulputate volutpat, arcu odio auctor est, viverra iaculis odio metus et libero. Nunc non lacus ut leo consectetur pretium. Suspendisse eget consectetur turpis.</p>
          <p>Suspendisse metus quam, aliquet suscipit enim egestas, lacinia malesuada tortor. Nam malesuada pellentesque interdum. Nullam sem tortor, viverra ut vestibulum consectetur, accumsan ac nisi. Nullam odio massa, ultrices non elit fringilla, pellentesque scelerisque urna. Curabitur pellentesque lobortis suscipit. Vivamus et ante risus. Nullam sed ex metus. Maecenas a sapien est. Ut non tincidunt dolor. Aenean posuere erat et massa rhoncus auctor.</p>
        </div>
      </div>

    </main>
  )
}

export default Nosotros