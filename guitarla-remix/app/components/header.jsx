import { Link, useLocation } from '@remix-run/react'
import logo from '../../public/img/logo.svg'

const Header = () => {

    const location = useLocation()

  return (
    <header className="header">
        <div className="container bar">
            <Link to='/'>
                <img className='logo' src={logo} alt='Guitar LA Logo' />
            </Link>
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
        </div>
    </header>
  )
}

export default Header