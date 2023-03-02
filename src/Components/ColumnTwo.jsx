import React from 'react'
import About from './About'
import ListPosts from './ListPosts';
import Sponsor from './Sponsor';

const ColumnTwo = ({posts}) => {
  return (
    <section className='cards'>
        <About/>
        { posts &&
          <ListPosts  list={posts.slice(0,5)}/>
        }
        <Sponsor/>
    </section>
  )
}

export default ColumnTwo