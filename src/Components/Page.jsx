import React from 'react'
import About from './About'
import {FaRegComment} from 'react-icons/fa'

const Page = ({post}) => {
    return (
        <div className='columns-page'>
            <section className='page'>
                <h2>{post.title}</h2>
                <div className='details'>
                    <img alt='' className='autor' src={post.author.image.url}/>
                    <small>{post.author.displayName}</small>
                    <div className='dot'></div>
                    <small>{post.published.substring(0, 10)}</small>
                    <div className='dot'></div>
                    <FaRegComment/>
                    <small>{post.replies.totalItems}</small>
                </div>
                <div dangerouslySetInnerHTML={{__html: post.content}} className='content'/>
            </section>
            <About/>
        </div>
    )
}

export default Page