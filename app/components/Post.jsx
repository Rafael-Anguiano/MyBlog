'use client'
import Link from 'next/link'
import { getDescription, getImage, getDate } from '../functions/gets'
import { BiLike, BiSolidLike, BiComment, BiSolidComment, BiShare, BiSolidShare } from 'react-icons/bi'
import styles from '@/app/components/post.module.css'
import { useState } from 'react'

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false)
  const [comment, setComment] = useState('')
  const [shared, setShared] = useState(false)

  const date = getDate(post.published)
  const image = getImage(post.content)
  const description = getDescription(post.content)

  return (
    <article className={styles.post}>
      <div className={styles.info}>
        <img alt='' src={post.author.image.url} className={styles.profilePicture} />
        <div className={styles.infoText}>
          <p className={styles.author}>{post.author.displayName}</p>
          <p>{date}</p>
        </div>
      </div>
      <Link href={`/post/${post.id}`}>
        <img src={image} alt='' className={styles.image} />
        <div>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <ul className={styles.tags}>
          {post.labels.map((tag, index) => <li key={index} className={styles.tag}>#{tag}</li>)}
        </ul>
      </Link>
      <div className={styles.interactions}>
        <button className={styles.icon} onClick={() => setLiked(!liked)}>{liked ? <BiSolidLike /> : <BiLike />}</button>
        <button className={styles.icon} onClick={() => setComment('Hola')}>{comment ? <BiSolidComment /> : <BiComment />}</button>
        <button className={styles.icon} onClick={() => setShared(true)}>{shared ? <BiSolidShare /> : <BiShare />}</button>
      </div>
    </article>
  )
}

export default Post
