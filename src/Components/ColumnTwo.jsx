import React from 'react'
import About from './About'
import ListPosts from './ListPosts';
import Sponsor from './Sponsor';

const ColumnTwo = ({posts = [], setPage}) => {
  return (
    <section className='cards'>
        <About/>
        <ListPosts  list={posts.slice(0,5)} setPage={setPage}/>
        <Sponsor/>
    </section>
  )
}

export default ColumnTwo