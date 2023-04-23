import Navigation from './navigation'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="content">
            <Navigation />
            <p className='copyright'>Todos los derechos reservados {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer