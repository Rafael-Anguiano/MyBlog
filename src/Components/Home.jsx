import React from 'react'
import Post from './Post';
import image from '../assets/image.png'
import './home.css'
import { useLocation } from 'react-router-dom';
import SEO from './SEO';
import ColumnTwo from './ColumnTwo';

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
        <ColumnTwo posts={posts} setPage={setPage}/>
      </div>
    </section>
  )
}

export default Home