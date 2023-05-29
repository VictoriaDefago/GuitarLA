import { useState, useEffect } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
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

  const [total, setTotal] = useState(0)

  const { shoppingCart, updateQuantity, deleteGuitar } = useOutletContext()

  useEffect( () => {
    const calculation = shoppingCart.reduce( (total, product) => total + (product.quantity * product.price), 0)
    setTotal(calculation)
  }, [shoppingCart])

  return (

    <ClientOnly fallback={'Updating...'}>
    { () => (
      <main className="container">
          <h1 className="heading">Carrito de Compras</h1>
          <div className="content">
              <div className='store'>
                  <h2>Artículos</h2>

                  {shoppingCart?.length === 0 ? 'El carrito de compras está vacío' : (
                    
                    shoppingCart?.map(product => (
                      <div key={product.id} className='product'>
                        <div>
                          <img src={product.image} alt={`Imagen del producto ${product.name}`} />
                        </div>
                        <div>
                          <p className='name'>{product.name}</p>
                          <p>Cantidad:</p>
                          <select value={product.quantity} onChange={ e => updateQuantity({
                            quantity: +e.target.value,
                            id: product.id
                          }) } className='select'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>

                          <p className='price'>$ <span>{product.price}</span></p>
                          <p className='subtotal'>Subtotal: $ <span>{product.quantity * product.price}</span></p>
                        </div>
                        <button type='button' onClick={ () => deleteGuitar(product.id) } className='delete'>X</button>
                      </div>
                    ))

                  )}
              </div>

              <aside className="resume">
                  <h3>Resumen del Pedido</h3>
                  <p>Total a pagar: $ {total}</p>
              </aside>
          </div>
      </main>
    )}
    </ClientOnly>
  )
}

export default Carrito