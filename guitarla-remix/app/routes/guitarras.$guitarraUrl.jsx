import { useState } from 'react'
import { useLoaderData } from '@remix-run/react'
import { getGuitar } from '~/models/guitars.server'

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

const Guitar = () => {

    const [quantity, setQuantity] = useState(0)

    const guitar = useLoaderData()
    const {name, price, image, description} = guitar.data[0].attributes

    return (
        <div className='guitar'>
            <img className='image' src={image.data.attributes.url} alt={`Imagen Guitarra ${name}`} />

            <div className='content'>
                <h3>{name}</h3>
                <p className='text'>{description}</p>
                <p className='price'>${price}</p>

                <form className='form'>
                    <label htmlFor='quantity'>Cantidad</label>
                    <select id="quantity" onChange={ e => setQuantity(+e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type='submit' value='Agregar al carrito' />
                </form>
            </div>
        </div>
    )
}

export default Guitar