import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import GuitarsList from '~/components/guitars-list'
import styles from '~/styles/guitars.css'


export function meta() {
  return [
    {title: "Guitar LA - Tienda"},
    {description: "Venta de guitarras, colección de guitarras"}
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}

export async function loader() {
  const guitars = await getGuitars()
  console.log(guitars)
  return guitars.data
}


const Tienda = () => {

  const guitars = useLoaderData()

  return (
    <main  className='container'>
      <GuitarsList guitars={guitars} />
    </main>
  )
}

export default Tienda