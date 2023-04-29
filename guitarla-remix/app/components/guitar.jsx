import { Link } from '@remix-run/react'

export default function Guitar({guitar}) {

    const {name, description, image, url, price} = guitar

    return (
        <div className="guitar">
            <img src={image.data.attributes.formats.medium.url} alt={`Imagen Guitarra ${name}`} />
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="price">${price}</p>

                <Link className='link' to={`/guitarras/${url}`}>Ver Producto</Link>
            </div>
        </div>
    )
}