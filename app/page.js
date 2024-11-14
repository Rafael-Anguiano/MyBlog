import Post from './components/Post'
import { fetchPosts } from './functions/fetchPosts'

const HomePage = async () => {
  const posts = await fetchPosts()
  return (
    <section id='Home'>
      <section className='posts'>
        {posts?.map((post, index) => <Post post={post} key={index} />)}
      </section>
    </section>
  )
}

export default HomePage
