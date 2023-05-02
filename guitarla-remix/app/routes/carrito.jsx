import styles from '~/styles/store.css'

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles,
        }
    ]
}

export function meta() {
    return [
      {title: "Guitar LA - Carrito de Compras"},
      {description: "Venta de guitarras, guitarras, blog de música, tienda, carrito de compras"}
    ]
  }


const Carrito = () => {
  return (
    <main className="container">
        <h1 className="heading">Carrito de Compras</h1>
        <div className="content">
            <div className='store'>
                <h2>Artículos</h2>
            </div>

            <aside className="resume">
                <h3>Resumen del Pedido</h3>
                <p>Total a pagar:</p>
            </aside>
        </div>
    </main>
  )
}

export default Carrito