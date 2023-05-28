import { useOutletContext } from '@remix-run/react'
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

  const { shoppingCart } = useOutletContext()
  console.log(shoppingCart)

  return (
    <main className="container">
        <h1 className="heading">Carrito de Compras</h1>
        <div className="content">
            <div className='store'>
                <h2>Artículos</h2>

                {shoppingCart.length === 0 ? 'El carrito de compras está vacío' : (
                  
                  shoppingCart.map(product => (
                    <div key={product.id} className='product'>
                      <div>
                        <img src={product.image} alt={`Imagen del producto ${product.name}`} />
                      </div>
                      <div>
                        <p className='name'>{product.name}</p>
                        <p className=''>Cantidad: {product.quantity}</p>
                        <p className='price'>$ <span>{product.price}</span></p>
                        <p className='subtotal'>Subtotal: $ <span>{product.quantity * product.price}</span></p>
                      </div>
                    </div>
                  ))

                )}
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