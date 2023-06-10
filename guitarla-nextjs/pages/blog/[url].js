import Layout from '../../components/layout'
import Image from 'next/image'
import styles from '../../styles/blog.module.css'
import { dateFormat } from '../../utils/helpers'

export default function Post({post}) {

    const { title, content, publishedAt, image } = post[0].attributes

    return (
        <Layout title={title}>
            <article className={`${styles.post} ${styles['mt-3']}`}>
                <Image src={image.data.attributes.url} alt={`Imagen Blog ${title}`} width={1000} height={600} />
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <p className={styles.date}>{dateFormat(publishedAt)}</p>
                    <p className={styles.text}>{content}</p>
                </div>
            </article>
        </Layout>
    )
}


export async function getServerSideProps({query: { url }}) {

    const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const { data: post } = await response.json()

    return {
        props: {
            post
        }
    }
}
