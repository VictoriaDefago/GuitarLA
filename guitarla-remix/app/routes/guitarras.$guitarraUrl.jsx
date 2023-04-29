import { useLoaderData } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'
import styles from '~/styles/guitars.css'

export async function loader({ params }) {
    const { guitarraUrl } = params
    const guitar = await getGuitar(guitarraUrl)

    if(guitar.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra no encontrada',
        })
    }
    return guitar
}


export function meta({data}) {
    if(!data){
        return [
            {title: 'Guitar LA - Not found'},
            {description: `Guitarras, Venta de guitarras, Guitarra ${data.data[0].attributes.name}`}
        ]
    }

    return [
      {title: `Guitar LA - ${data.data[0].attributes.name}`},
      {description: `Guitarras, Venta de guitarras, Guitarra ${data.data[0].attributes.name}`}
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


const Guitar = () => {

    const guitar = useLoaderData()
    const {name, price, image, description} = guitar.data[0].attributes
    console.log(image)

    return (
        <main className='container guitar'>
            <img className='image' src={image.data.attributes.url} alt={`Imagen Guitarra ${name}`} />

            <div className='content'>
                <h3>{name}</h3>
                <p className='text'>{description}</p>
                <p className='price'>${price}</p>
            </div>
        </main>
    )
}

export default Guitar