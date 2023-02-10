import React, {useEffect, useState} from 'react'
import axios from "axios";
import Post from '../Post';
import './home.css'

import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`)
      .then(function ({data}) {
        setPosts(data.items)
      })
  }, []);

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