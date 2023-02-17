import React from 'react'
import Post from './Post';
import About from './About';
import './home.css'

const Home = ({posts, setPage}) => {
  return (
    <section id="Home">
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