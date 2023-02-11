import React from 'react'
import { FaRegComment, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const getImage = (content) => {
    const searchTerm = 'src=';
    const searchEnd = '"'
    const startOfSource = content.indexOf(searchTerm)+5;
    let image = content.slice(startOfSource)
    const endOfSource = image.indexOf(searchEnd);
    image = image.slice(0, endOfSource)
    return `${image}`
}

const getDescription = (content) => {
    const searchTerm = '<p>'
    const searchEnd = '</p>'
    const startOfSource = content.indexOf(searchTerm)+3;
    let description = content.slice(startOfSource)
    const endOfSource = description.indexOf(searchEnd);
    description = description.slice(0, endOfSource)
    return `${description}`
}

const Post = ({post, setActivePage, setPage}) => {

    const image = getImage(post.content)
    const description = getDescription(post.content)
    
    const handleClick = () => {
        setActivePage('Page')
        setPage(post)
    }

    return (
        <article className='post'>
            <img onClick={handleClick} alt='' className='post-img' src={image}/>
            <div className='information'>
                <div className='details'>
                    <img alt='' className='autor' src={post.author.image.url}/>
                    <small>{post.author.displayName}</small>
                    <div className='dot'></div>
                    <small>{post.published.substring(0, 10)}</small>
                    <div className='dot'></div>
                    <FaRegComment/>
                    <small>{post.replies.totalItems}</small>
                </div>
                <h2 onClick={handleClick}>{post.title}</h2>
                <p className='description' dangerouslySetInnerHTML={{__html: description}} ></p>
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