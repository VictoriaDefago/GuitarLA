import { Link, useLocation } from '@remix-run/react'
import image from '../../public/img/carrito.png'

const Navigation = () => {

    const location = useLocation()

    return (
        <nav className="nav">
            <Link 
                to='/'
                className={location.pathname === '/' ? 'active' : ''}
            >Inicio</Link>
            <Link 
                to='/nosotros'
                className={location.pathname === '/nosotros' ? 'active' : ''}
            >Nosotros</Link>
            <Link 
                to='/guitarras'
                className={location.pathname === '/guitarras' ? 'active' : ''}
            >Tienda</Link>
            <Link 
                to='/blog'
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
            <Link 
                to='/carrito'
            ><img src={image} alt="Imagen carrito de compras" /></Link>
        </nav>
    )
}

export default Navigation