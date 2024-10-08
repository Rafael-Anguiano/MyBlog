'use client'
import { FaRegComment } from 'react-icons/fa'
import { getDate } from '../functions/gets'

const PostContent = ({ post }) => {
  const date = getDate(post.published)
  return (
    <section className='page'>
      <h2>{post?.title}</h2>
      <div className='details'>
        <img alt='' className='autor' src={post?.author.image.url} />
        <small>{post?.author.displayName}</small>
        <div className='dot' />
        <small>{date}</small>
        <div className='dot' />
        <FaRegComment />
        <small>{post?.replies.totalItems}</small>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} className='content' />
    </section>
  )
}

export default PostContent
