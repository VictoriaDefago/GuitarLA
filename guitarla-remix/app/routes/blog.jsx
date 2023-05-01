import { useLoaderData } from '@remix-run/react'
import PostsList from '~/components/posts-list'
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
      <PostsList posts={posts}/>
    </main>
  )
}

export default Blog