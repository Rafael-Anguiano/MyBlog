import React, {useEffect, useState} from 'react'
// import axios from "axios";
import Post from '../Post';
import './home.css'

import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

// const API_KEY = process.env.REACT_APP_API_KEY
// const BLOG_ID = process.env.REACT_APP_BLOG_ID

const Home = () => {

  // const [posts, setPosts] = useState()

  const posts = [{
      "kind": "blogger#post",
      "id": "9034914017688556426",
      "blog": {
          "id": "4933975118950321740"
      },
      "published": "2023-02-09T18:32:00-08:00",
      "updated": "2023-02-09T18:32:58-08:00",
      "url": "http://rafael-anguiano.blogspot.com/2023/02/blog-post.html",
      "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4933975118950321740/posts/9034914017688556426",
      "title": "This is my First Test",
      "content": "<p>&nbsp;Esto es parte del Test<br /></p><div class=\"separator\" style=\"clear: both; text-align: center;\"><br /></div><div class=\"separator\" style=\"clear: both; text-align: center;\"><br /></div><div class=\"separator\" style=\"clear: both; text-align: center;\"><a href=\"https://blogger.googleusercontent.com/img/a/AVvXsEgrQz5S8jm9QL1gl8MIegMcP_wOl9JMvfCcD-II5WiW19V9kwX3upAxnaEKTJku0CJ8OkfsXRafxaidRaEEQm1QFMnHrQDjWWR_erQfGlBt4iFxHH0xJ2bPyM_jPYYQ0z4HDn9qaMJSYEfBvQXXxDcKh-yWmnAMpgvvuu6YleBez4c-zmmCk-hIxXtG0g\" style=\"margin-left: 1em; margin-right: 1em;\"><img alt=\"\" data-original-height=\"338\" data-original-width=\"507\" height=\"213\" src=\"https://blogger.googleusercontent.com/img/a/AVvXsEgrQz5S8jm9QL1gl8MIegMcP_wOl9JMvfCcD-II5WiW19V9kwX3upAxnaEKTJku0CJ8OkfsXRafxaidRaEEQm1QFMnHrQDjWWR_erQfGlBt4iFxHH0xJ2bPyM_jPYYQ0z4HDn9qaMJSYEfBvQXXxDcKh-yWmnAMpgvvuu6YleBez4c-zmmCk-hIxXtG0g\" width=\"320\" /></a></div><br /><br /><p></p>",
      "author": {
          "id": "14064105555204769821",
          "displayName": "Rafael Anguiano",
          "url": "https://www.blogger.com/profile/14064105555204769821",
          "image": {
              "url": "//4.bp.blogspot.com/-AdIPXFdxZTY/Y-X8spouv2I/AAAAAAAAANE/wvvEM2CoLM4HfPyow9AhlykvNnYb9UQOgCK4BGAYYCw/s35/me.jpg"
          }
      },
      "replies": {
          "totalItems": "0",
          "selfLink": "https://www.googleapis.com/blogger/v3/blogs/4933975118950321740/posts/9034914017688556426/comments"
      },
      "labels": [
          "Popular"
      ],
      "etag": "\"dGltZXN0YW1wOiAxNjc1OTk2Mzc4Mjc5Cm9mZnNldDogLTI4ODAwMDAwCg\""
  }]

  // useEffect(() => {
  //   axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`)
  //     .then(function ({data}) {
  //       setPosts(data.items)
  //     })
  // }, []);

  return (
    <section id="Home">
      <section className='featured'>
      </section>
      <div className='columns'>
        <section className='posts'>
          {posts.map((post, index) => <Post post={post} key={index}/>)}
        </section>
        <section className='cards'>
          <article className='about'>
            <img src="./me.jpg"/>
            <small>I am an engineering student motivated to learn and grow both professionally and personally.</small>
            <div>
              <button><FaTwitter/></button>
              <button><FaLinkedin/></button>
              <button><FaInstagram/></button>
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}

export default Home