import ListPosts from './ListPosts'
import PostTags from './PostTags'

const ColumnTwo = () => {
  return (
    <section className='cards'>
      <PostTags />
      <ListPosts />
    </section>
  )
}

export default ColumnTwo
