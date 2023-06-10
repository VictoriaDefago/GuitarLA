import Layout from '../components/layout'
import Post from '@/components/post'
import styles from '../styles/grid.module.css'

export default function Blog({posts}) {
  return (
    <Layout title='Blog' description='Guitar LA, blog de música, venta de guitarras' >

      <main className='container'>
        <h1 className='heading'>Blog</h1>
        <div className={styles.grid}>
          {posts?.map( post => (
            <Post post={post.attributes} key={post.id} />
          ))}
        </div>
      </main>

    </Layout>
  )
}


export async function getStaticProps() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=image`)
  const { data: posts } = await response.json()

  return {
    props: {
      posts
    }
  }
}
