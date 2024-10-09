'use client'
import { getDate } from '../functions/gets'
import styles from '@/app/components/post-content.module.css'

const PostContent = ({ post }) => {
  const date = getDate(post.published)
  return (
    <section className={styles.page}>
      <div className={styles.info}>
        <img alt='' src={post?.author.image.url} className={styles.profilePicture} />
        <div>
          <p className={styles.author}>{post?.author.displayName}</p>
          <p>{date}</p>
        </div>
      </div>
      <h2 className={styles.title}>{post?.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} className='content' />
    </section>
  )
}

export default PostContent
