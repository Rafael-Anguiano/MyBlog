import Post from "./components/Post"

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

const fetchPosts = () => {
  return fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`, {
      next: {
          revalidate: 60 
      }
  })
  .then(res => res.json())
}

const HomePage = async () => {
  const posts = await fetchPosts()
  return (
    <section id="Home">
      <section className='posts'>
        {posts.items.map((post, index) => <Post post={post} key={index}/>)}
      </section>
    </section>
  )
}

export default HomePage