import { FaRegComment } from 'react-icons/fa'
import { getDescription, getImage } from '../../functions/gets'

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

export async function generateMetadata ({ params, searchParams }, parent) {
  const id = params.id
  const post = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`, { cache: 'no-store' })
    .then((res) => res.json())
  const image = getImage(post?.content)
  const description = getDescription(post?.content)

  return {
    title: post.title,
    openGraph: {
      images: [image],
      description
    }
  }
}

const fetchPage = (id) => {
  return fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`, { cache: 'no-store' })
    .then(res => res.json())
}

const Page = async ({ params }) => {
  const { id } = params
  const post = await fetchPage(id)

  return (
    <div className='columns-page'>
      <section className='page'>
        <h2>{post?.title}</h2>
        <div className='details'>
          <img alt='' className='autor' src={post?.author.image.url} />
          <small>{post?.author.displayName}</small>
          <div className='dot' />
          <small>{post?.published.substring(0, 10)}</small>
          <div className='dot' />
          <FaRegComment />
          <small>{post?.replies.totalItems}</small>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post?.content }} className='content' />
      </section>
    </div>
  )
}

export default Page
