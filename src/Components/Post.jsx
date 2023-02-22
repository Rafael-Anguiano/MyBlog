import React from 'react'
import { FaRegComment, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getDescription, getImage } from '../functions/gets';

const Post = ({post, setPage}) => {

    const image = getImage(post.content)
    const description = getDescription(post.content)
    const handleClick = () => {
        setPage(post)
    }

    return (
        <article className='post'>
            <Link to={`/post/${post.id}`}><img onClick={handleClick} alt='' className='post-img' src={image}/></Link>
            <div className='information'>
                <div className='details'>
                    <img alt='' className='autor' src={post.author.image.url}/>
                    <small>{post.author.displayName}</small>
                    <div className='dot'></div>
                    <small>{post.published.substring(0, 10)}</small>
                    <div className='dot'></div>
                    <FaRegComment className='comments'/>
                    <small className='comments'>{post.replies.totalItems}</small>
                </div>
                <Link to={`/post/${post.id}`}><h2 onClick={handleClick}>{post.title}</h2></Link>
                <p className='description' dangerouslySetInnerHTML={{__html: description}} ></p>
                <div className='social-media'>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=blog-rafael-anguiano.vercel.app/post/${post.id}`} target="_blank" rel="noreferrer">
                        <button><FaLinkedin/></button>
                    </a>
                    <a href={`mailto:rj.anguiano.23@gmail.com?subject=${encodeURI("Rafael Anguiano | Blog")}&body=${encodeURI(`Please check this amazing post titled "${post.title}" in the next URL:`)+`%0Ahttps://blog-rafael-anguiano.vercel.app/post/${post.id} %0A`}`} target="_blank" rel="noreferrer">
                        <button><MdEmail/></button>
                    </a>
                    <a href={`https://wa.me/+523331504871?text=${encodeURI(`Please check this amazing post titled '${post.title}' in the next URL:`)+`%0Ahttps://blog-rafael-anguiano.vercel.app/post/${post.id} %0A`}`} target="_blank" rel="noreferrer">
                        <button><FaWhatsapp/></button>
                    </a>
                    <a href={`https://twitter.com/intent/tweet?text=${encodeURI(`Hey! Check out this Interesting Post:`)+`%0Ahttps://blog-rafael-anguiano.vercel.app/post/${post.id} %0A`}`} target="_blank" rel="noreferrer">
                        <button><FaTwitter/></button>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Post