import Post from './components/Post'

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

const fetchPosts = async () => {
  const data = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`)
  const posts = await data.json()
  return posts.items
}

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
