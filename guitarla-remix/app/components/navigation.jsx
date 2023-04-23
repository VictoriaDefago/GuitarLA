import { Link, useLocation } from '@remix-run/react'

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
                to='/tienda'
                className={location.pathname === '/tienda' ? 'active' : ''}
            >Tienda</Link>
            <Link 
                to='/blog'
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
        </nav>
    )
}

export default Navigation