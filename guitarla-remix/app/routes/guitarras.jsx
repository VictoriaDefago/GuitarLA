import { Outlet } from '@remix-run/react'
import styles from '~/styles/guitars.css'


export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}

const Tienda = () => {

  return (
    <main  className='container'>
      <Outlet />
    </main>
  )
}

export default Tienda