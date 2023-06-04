import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout title={'Inicio'} description='Venta de guitarras y blog de música' />
      <h1>Hola Mundo</h1>
    </>
  )
}
