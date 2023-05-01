import { useLoaderData } from '@remix-run/react'
import Post from './post'
import { getPosts } from '~/models/posts.server'

export default function PostList({posts}) {
  return (
    <>
      <h2 className='heading'>Blog</h2>

      <div className='blog'>
        {posts.map( post => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </>
  )
}
