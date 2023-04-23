import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg'
import Navigation from './navigation'

const Header = () => {

  return (
    <header className="header">
        <div className="bar">
            <Link to='/'>
                <img className='logo' src={logo} alt='Guitar LA Logo' />
            </Link>
            <Navigation />
        </div>
    </header>
  )
}

export default Header