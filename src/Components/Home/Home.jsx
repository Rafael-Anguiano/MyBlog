import React from 'react'
import Post from '../Post';
import About from '../About';
import './home.css'

const Home = ({posts, setActivePage, setPage}) => {
  return (
    <section id="Home">
      <section className='featured'>
      </section>
      <div className='columns'>
        <section className='posts'>
          {posts.map((post, index) => <Post post={post} key={index} setActivePage={setActivePage} setPage={setPage}/>)}
        </section>
        <About/>
      </div>
    </section>
  )
}

export default Home