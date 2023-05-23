import React from 'react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

const fetchPosts = () => {
  return fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`, {cache: "no-store"})
  .then(res => res.json())
}

const ListPosts = async () => {
    const list = await fetchPosts()
    return (
        <article className='recent-post'>
            <h3>Recent Posts</h3>
            <ul>
                {list.items.slice(0,5).map((item, index) => {
                    return (
                        <li key={item?.id}>
                            <Link href={`/post/${item?.id}`} className="list-item"><span>{index+1}. </span>
                                {item?.title}
                            </Link>
                            <HiArrowRight/>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}

export default ListPosts