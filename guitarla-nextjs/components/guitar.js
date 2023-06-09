import Image from "next/image"
import Link from "next/link"
import styles from '../styles/guitars.module.css'

export default function Guitar({guitar}) {
  
  const { name, description, price, image, url } = guitar

  return (
    <div className={styles.guitar}>
      <Image src={image.data.attributes.formats.medium.url} width={600} height={400} alt={`Image Guitar ${name}`} />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link href={`guitarras/${url}`} className={styles.link}>Ver Producto</Link>
      </div>
    </div>
  )
}
