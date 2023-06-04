import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/header.module.css'

export default function Header() {

  const router = useRouter();

  return (
    <header className={styles.header}>
        <div className={`container ${styles.bar}`}>
            <Link href="/" >
              <Image src="/img/logo.svg" width={300} height={40} alt='Imagen Logo Guitar LA' />
            </Link>
            <nav className={styles.navigation} >
                <Link href="/" className={ router.pathname === '/' ? styles.active : '' } >
                  Inicio
                </Link>
                <Link href="/nosotros" className={ router.pathname === '/nosotros' ? styles.active : '' } >
                  Nosotros
                </Link>
                <Link href="/tienda" className={ router.pathname === '/tienda' ? styles.active : '' } >
                  Tienda
                </Link>
                <Link href="/blog" className={ router.pathname === '/blog' ? styles.active : '' } >
                  Blog
                </Link>
            </nav>
        </div>
    </header>
  )
}
