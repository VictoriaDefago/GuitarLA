import Image from "next/image"
import Layout from '../../components/layout'
import styles from '../../styles/guitars.module.css'

export default function Product({guitar}) {

    const { name, description, price, image } = guitar[0].attributes

  return (
    <Layout title={`Guitarra ${name}`}>
        <div className={styles.guitar}>
            <Image src={image.data.attributes.url} width={600} height={400} alt={`Image Guitar ${name}`} />
            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>${price}</p>
            </div>
        </div>
    </Layout>
  )

}


// export async function getServerSideProps({query: { url }}) {

//     const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
//     const { data: guitar } = await response.json()

//     return {
//         props: {
//             guitar
//         }
//     }
// }




export async function getStaticPaths() {

    const response = await fetch(`${process.env.API_URL}/guitars`)
    const { data } = await response.json()

    const paths = data.map( guitar => ({
        params: {
            url: guitar.attributes.url
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: { url }}) {

    const response = await fetch(`${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`)
    const { data: guitar } = await response.json()

    return {
        props: {
            guitar
        }
    }
}