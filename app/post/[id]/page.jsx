import Head from 'next/head'
import { FaRegComment } from 'react-icons/fa'
import { getDescription, getImage } from '../../functions/gets'

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

const fetchPage = (id) => {
  return fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`, { cache: 'no-store' })
    .then(res => res.json())
}

const Page = async ({ params }) => {
  const { id } = params
  const post = await fetchPage(id)
  const image = getImage(post?.content)
  const description = getDescription(post?.content)
  return (
    <div className='columns-page'>
      <Head>
        <title>{post.title}</title>
        <meta property='og:title' content={post.title} key='title' />
        <meta property='og:type' content='website' key='type' />
        <meta property='og:image' content={image} key='image' />
        <meta property='og:description' content={description} key='description' />
      </Head>
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
