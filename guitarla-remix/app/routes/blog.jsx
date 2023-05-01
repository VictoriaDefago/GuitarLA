import { useLoaderData } from '@remix-run/react'
import Post from '~/components/post'
import { getPosts } from '~/models/posts.server'
import styles from '~/styles/blog.css'

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

export function meta() {
    return [
      {title: "Guitar LA - Blog"},
      {description: "Guitarras, Blog Guitarras, Blog de música"}
    ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}

const Blog = () => {

  const posts = useLoaderData()

  return (
    <main className='container'>
      <h2 className='heading'>Blog</h2>

      <div className='blog'>
        {posts.map( post => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </main>
  )
}

export default Blog