import { getDescription, getImage } from '../../functions/gets'
import PostContent from '@/app/components/PostContent'

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

export async function generateMetadata({ params, searchParams }, parent) {
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

const fetchPage = async (id) => {
  return fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`, { cache: 'no-store' })
    .then(res => res.json())
}

const Page = async ({ params }) => {
  const { id } = params
  const post = await fetchPage(id)

  return (
    <div className='columns-page'>
      <PostContent post={post} />
    </div>
  )
}

export default Page
