import { useLoaderData } from '@remix-run/react'
import { getGuitars } from '~/models/guitars.server'
import Guitar from '~/components/guitar'


export function meta() {
  return [
    {title: "Guitar LA - Tienda"},
    {description: "Venta de guitarras, blog de música"}
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
      <h2 className='heading'>Nuestra Colección</h2>

      {guitars?.length && (
        <div className='guitars-grid'>
          {guitars?.map( guitar => (
            <Guitar guitar={guitar?.attributes} key={guitar?.id} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda