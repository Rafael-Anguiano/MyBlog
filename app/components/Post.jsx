'use client'
import Link from 'next/link'
import { getDescription, getImage, getDate } from '../functions/gets'
import { BiLike, BiSolidLike, BiComment, BiSolidComment, BiShare, BiSolidShare } from 'react-icons/bi'
import { useState } from 'react'

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState('')
  const [shared, setShared] = useState(false)

  const date = getDate(post.published)
  const image = getImage(post.content)
  const description = getDescription(post.content)

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
        <ul className='post-tags'>
          {post.labels.map((tag, index) => <li key={index}>#{tag}</li>)}
        </ul>
      </Link>
      <div className='post-interaction'>
        <button className='icon' onClick={() => setLiked(!liked)}>{liked ? <BiSolidLike /> : <BiLike />}</button>
        <button className='icon' onClick={() => setComment('Hola')}>{comment ? <BiSolidComment /> : <BiComment />}</button>
        <button className='icon' onClick={() => setShared(true)}>{shared ? <BiSolidShare /> : <BiShare />}</button>
      </div>
    </article>
  )
}

export default Post
