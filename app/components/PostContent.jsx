'use client'
import { useEffect } from 'react'
import usePosts from '../stores/usePosts'
import { FaRegComment } from 'react-icons/fa'
import { getDescription, getInfo } from '../functions/gets'

const PostContent = ({ post }) => {
  const setPostInfo = usePosts(state => state.setPostInfo)
  const showInfo = usePosts(state => state.showInfo)

  useEffect(
    () => {
      setPostInfo(
        post?.author.displayName,
        post?.published.substring(0, 10),
        getInfo(getDescription(post?.content)),
        post?.labels
      )
      showInfo(true)
    },
    []
  )

  return (
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
  )
}

export default PostContent;
