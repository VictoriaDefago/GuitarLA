import Layout from '../components/layout'
import GuitarsList from '@/components/guitarsList'

export default function Tienda({guitars}) {
  return (
    <Layout title='Tienda' description='Guitar LA, venta de instrumentos musicales, venta de guitarras' >

      <main className='container'>
        <h1 className='heading'>Nuestra Colección</h1>
        <GuitarsList guitars={guitars} />
      </main>

    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/guitars?populate=image`)
  const { data: guitars } = await response.json()

  return {
    props: {
      guitars
    }
  }
}