import Layout from "../components/layout"
import styles from '../styles/shoppingCart.module.css'
import Image from "next/image"

export default function Carrito({shoppingCart, updateQuantity}) {
  return (
    <Layout title="Carrito de Compras">
      <main className="container">
        <h1 className="heading">Carrito de Compras</h1>
        <div className={styles.content} >
            <div className={styles.shopping} >
                <h2>Artículos</h2>
                {shoppingCart.length === 0 ? 'Carrito de Compras vacío' : (
                  shoppingCart.map( product => (
                    <div key={product.id} className={styles.product} >
                      <div>
                        <Image width={250} height={480} src={product.image} alt={product.name} />
                      </div>
                      <div>
                        <p className={styles.name}>{product.name}</p>

                        <div className={styles.quantity}>
                          <p>Cantidad:</p>
                          <select className={styles.select} value={product.quantity} onChange={ e => updateQuantity({
                            id: product.id,
                            quantity: e.target.value
                          })}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>

                        <p className={styles.price}>$<span>{product.price}</span></p>
                        <p className={styles.subtotal}>Subtotal: $<span>{product.price * product.quantity}</span></p>
                      </div>
                    </div>
                  ))
                )}
            </div>
            <aside className={styles.resume}>
                <h3>Resumen del Pedido</h3>
                <p>Total a pagar: </p>
            </aside>
        </div>
      </main>
    </Layout>
  )
}
