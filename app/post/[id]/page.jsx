import { getDescription, getImage } from '../../functions/gets'
import PostContent from '@/app/components/PostContent'
import { fetchPost } from '@/app/functions/fetchPosts'

export async function generateMetadata ({ params }, parent) {
  const id = params.id
  const post = await fetchPost(id)
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

const Page = async ({ params }) => {
  const { id } = params
  const post = await fetchPost(id)
  return (
    <div className='page-container'>
      <PostContent post={post} />
    </div>
  )
}

export default Page
