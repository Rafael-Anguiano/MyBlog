const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

export const fetchPosts = async () => {
  const data = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`, { cache: 'no-store' })
  const posts = await data.json()
  return posts.items
}

export const fetchPost = async (id) => {
  const data = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`, { cache: 'no-store' })
  const post = await data.json()
  return post
}
