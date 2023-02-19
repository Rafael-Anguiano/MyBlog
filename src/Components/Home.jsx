import React from 'react'
import Post from './Post';
import About from './About';
import image from '../assets/image.png'
import './home.css'
import { useLocation } from 'react-router-dom';
import SEO from './SEO';

const Home = ({posts, setPage}) => {
  const location = useLocation();
  let title = "Rafael Anguiano | Blog"
  let description = "Hi All :) Check out my blog"
  return (
    <section id="Home">
      <SEO title={title} image={image} pathname={location.pathname} description={description}/>
      <section className='featured'>
      </section>
      <div className='columns'>
        <section className='posts'>
          {posts.map((post, index) => <Post post={post} key={index} setPage={setPage}/>)}
        </section>
        <About/>
      </div>
    </section>
  )
}

export default Home