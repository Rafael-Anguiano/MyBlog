import React from 'react'
import { FaRegComment, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Post = ({post}) => {
    return (
        <article className='post'>
            <img className='post-img' src='https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445'/>
            <div className='information'>
                <div className='details'>
                    <img className='autor' src={post.author.image.url}/>
                    <small>{post.author.displayName}</small>
                    <div className='dot'></div>
                    <small>{post.published.substring(0, 10)}</small>
                    <div className='dot'></div>
                    <FaRegComment/>
                    <small>{post.replies.totalItems}</small>
                </div>
                <h2>{post.title}</h2>
                <p className='description'>A lo largo de mi vida como desarrollador me ha tocado aprender varias cosas que no te explican en ningún instituto o universidad. Y en este post me gustaría compartirlas con ustedes.</p>
                <div className='social-media'>
                    <button><FaFacebook/></button>
                    <button><FaTwitter/></button>
                    <button><FaLinkedin/></button>
                    <button><FaPinterest/></button>
                    <button><FaTelegram/></button>
                    <button><MdEmail/></button>
                </div>
            </div>
        </article>
    )
}

export default Post