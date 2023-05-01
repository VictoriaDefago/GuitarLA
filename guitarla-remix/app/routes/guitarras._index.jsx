import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import GuitarsList from '~/components/guitars-list'

export function meta() {
  return [
    {title: "Guitar LA - Tienda"},
    {description: "Venta de guitarras, colección de guitarras"}
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
    <GuitarsList guitars={guitars} />
  )
}

export default Tienda