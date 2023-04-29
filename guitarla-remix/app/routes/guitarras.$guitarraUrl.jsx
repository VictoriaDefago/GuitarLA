import { useLoaderData } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'
import styles from '~/styles/guitars.css'


export function meta({data}) {
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

export async function loader({ params }) {
    const { guitarraUrl } = params
    const guitar = await getGuitar(guitarraUrl)
    return guitar
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