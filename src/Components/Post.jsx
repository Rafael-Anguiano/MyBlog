import React from 'react'
import { FaRegComment, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
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
                <a href={'https://www.linkedin.com/in/rafael-anguiano/'} target="_blank" rel="noreferrer"><button><FaLinkedin/></button></a>
                <a href={'mailto:rj.anguiano.23@gmail.com'} target="_blank" rel="noreferrer"><button><MdEmail/></button></a>
                <a href={'https://wa.me/+523331504871'} target="_blank" rel="noreferrer"><button><FaWhatsapp/></button></a>
                <a href={'https://twitter.com/Rezuks23'} target="_blank" rel="noreferrer"><button><FaTwitter/></button></a>
                </div>
            </div>
        </article>
    )
}

export default Post