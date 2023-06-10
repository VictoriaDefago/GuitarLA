import Layout from "../components/layout"
import styles from '../styles/shoppingCart.module.css'

export default function Carrito() {
  return (
    <Layout title="Carrito de Compras">
      <main className="container">
        <h1 className="heading">Carrito de Compras</h1>
        <div className={styles.content} >
            <div className={styles.shopping} >
                <h2>Artículos</h2>
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
