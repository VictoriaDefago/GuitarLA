import Image from "next/image"
import Link from "next/link"
import { dateFormat } from '../utils/helpers'
import styles from '../styles/blog.module.css'

export default function Post({post}) {

    const { image, content, title, url, publishedAt } = post

  return (
    <article className={styles.grid}>
      <Image src={image.data.attributes.formats.medium.url} alt={`Imagen Blog ${title}`} width={600} height={400} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{dateFormat(publishedAt)}</p>
        <p className={styles.resume}>{content}</p>
        <Link href={`/blog/${url}`} className={styles.link}>Ver Post</Link>
      </div>
    </article>
  )
}
