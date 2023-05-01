import { useLoaderData } from '@remix-run/react'
import PostsList from '~/components/posts-list'
import { getPosts } from '~/models/posts.server'

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

const Blog = () => {

  const posts = useLoaderData()

  return (
    <PostsList posts={posts}/>
  )
}

export default Blog