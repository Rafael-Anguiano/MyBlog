'use client'
import usePosts from '../stores/usePosts'
import PostData from './PostData'

const ColumnTwo = () => {
  const displayInfo = usePosts(state => state.displayInfo)
  return (
    <section className='cards'>
      {displayInfo ? <PostData /> : <></>}
    </section>
  )
}

export default ColumnTwo
