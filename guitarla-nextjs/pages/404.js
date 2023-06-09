import Layout from '../components/layout'
import Link from 'next/link'

export default function Page404() {
  return (
    <Layout title="Página No Encontrada">
      <p className='error'>Página No Encontrada</p>
      <Link href={'/'} className='error-link'>Volver a Página Principal</Link>
    </Layout>
  )
}
