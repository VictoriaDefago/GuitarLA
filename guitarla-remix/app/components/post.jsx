import { Link } from '@remix-run/react'
import { dateFormat } from '~/utils/helpers'

const Post = ({post}) => {

    const { title, content, url, publishedAt, image } = post

    return (
        <article className="post">
            <img className='image' src={image.data.attributes.formats.small.url} alt={`Imagen Artículo ${title}`} />
            <div className="content">
                <h3 className='post-title'>{title}</h3>
                <p className="post-date">{dateFormat(publishedAt)}</p>
                <p className="post-resume">{content}</p>
                <Link className='link' to={`/posts/${url}`}>Leer Artículo</Link>
            </div>
        </article>
    )
}

export default Post
