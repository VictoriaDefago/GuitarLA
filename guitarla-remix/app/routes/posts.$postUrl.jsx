import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { dateFormat } from '~/utils/helpers'
import styles from '~/styles/blog.css'

export async function loader({ params }) {
    const { postUrl } = params
    const post = await getPost(postUrl)

    if(post.data.length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada',
        })
    }
    return post
}

export function links() {
    return [
      {
        rel: 'stylesheet',
        href: styles,
      }
    ]
}

export function meta({data}) {
    if(!data){
        return [
            {title: 'Guitar LA - Not found'},
            {description: `Blog Guitarras, Blog de música, Artículo ${data.data[0].attributes.title}`}
        ]
    }

    return [
      {title: `Guitar LA - ${data.data[0].attributes.title}`},
      {description: `Blog Guitarras, Blog de música, Artículo ${data.data[0].attributes.title}`}
    ]
}

const Post = () => {

    const post = useLoaderData()
    const {title, content, image, publishedAt} = post?.data[0]?.attributes

    return (
        <article className='container post mt-3'>
            <img className='image' src={image?.data?.attributes?.url} alt={`Imagen Artículo ${title}`} />
            <div className="content mt-3">
                <h3>{title}</h3>
                <p className="post-date">{dateFormat(publishedAt)}</p>
                <p className="text">{content}</p>
            </div>
        </article>
    )
}

export default Post