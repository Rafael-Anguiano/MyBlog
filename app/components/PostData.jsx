'use client'

import Image from 'next/image'
import usePosts from '../stores/usePosts.js'

const PostData = () => {
  const author = usePosts((state) => state.author)
  const date = usePosts((state) => state.date)
  const tags = usePosts((state) => state.tags)
  const description = usePosts((state) => state.description)

  return (
    <div className='post-data'>
      <div className='Author'>
        <Image src='/images/me.jpg' width={60} height={60} alt='author' />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span>{author}</span>
          <span style={{ fontWeight: '400', fontSize: '0.8rem' }}>{date}</span>
        </div>
      </div>
      <div className='post-description'>
        <span>{description}</span>
      </div>
      <ul className='tags'>
        {tags.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostData
