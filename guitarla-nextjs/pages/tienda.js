import Layout from '../components/layout'
import Guitar from '../components/guitar'
import styles from '../styles/grid.module.css'

export default function Tienda({guitars}) {
  return (
    <Layout title='Tienda' description='Guitar LA, venta de instrumentos musicales, venta de guitarras' >

      <main className='container'>
        <h1 className='heading'>Nuestra Colección</h1>

        <div className={styles.grid}>
          {guitars?.map( guitar => (
            <Guitar guitar={guitar.attributes} key={guitar.id} />
          ))}
        </div>
    
      </main>

    </Layout>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  const { data: guitars } = await response.json()

  return {
    props: {
      guitars
    }
  }
}

