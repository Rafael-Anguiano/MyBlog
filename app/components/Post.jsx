'use client'
import Link from 'next/link'
import { getDescription, getImage, getDate } from '../functions/gets'
import { BiLike, BiComment, BiShare } from 'react-icons/bi'

const Post = ({ post }) => {
  const image = getImage(post.content)
  const description = getDescription(post.content)
  const date = getDate(post.published)
  return (
    <article className='post'>
      <div className='post-info'>
        <img alt='' src={post.author.image.url} className='author-image' />
        <div>
          <p className='post-author'>{post.author.displayName}</p>
          <p>{date}</p>
        </div>
      </div>
      <Link href={`/post/${post.id}`}>
        <img src={image} alt='' className='post-image' />
        <div>
          <h2 className='subtitle'>{post.title}</h2>
          <p className='description' dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </Link>
      <div className='post-interaction'>
        <button className='icon'><BiLike /></button>
        <button className='icon'><BiComment /></button>
        <button className='icon'><BiShare /></button>
      </div>
    </article>
  )
}

export default Post
