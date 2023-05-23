'use client'

import { FaRegComment, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { getDescription, getImage } from '../functions/gets';

const Post = ({post, setPage}) => {

    const image = getImage(post.content)
    const description = getDescription(post.content)

    return (
        <article className="post">
            <Link href={`/post/${post.id}`}>
                <img 
                    src={image}
                    alt='' 
                    className="img" 
                />
            </Link>
            <div className="information">
                <div className="details">
                    <img alt='' className="autor" src={post.author.image.url}/>
                    <small>{post.author.displayName}</small>
                    <div className="dot"></div>
                    <small>{post.published.substring(0, 10)}</small>
                    <div className="dot"></div>
                    <FaRegComment className="comments"/>
                    <small className="comments">{post.replies.totalItems}</small>
                </div>
                <Link href={`/post/${post.id}`}><h2 className="subtitle">{post.title}</h2></Link>
                <p className="description" dangerouslySetInnerHTML={{__html: description}} ></p>
                <div className="social">
                    <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=blog-rafael-anguiano.vercel.app/post/${post.id}`} target="_blank" rel="noreferrer">
                        <button><FaLinkedin/></button>
                    </Link>
                    <Link href={`mailto:rj.anguiano.23@gmail.com?subject=${encodeURI("Rafael Anguiano | Blog")}&body=${encodeURI(`Please check this amazing post titled "${post.title}" in the next URL:`)+`%0Ahttps://blog-rafael-anguiano.vercel.app/post/${post.id} %0A`}`} target="_blank" rel="noreferrer">
                        <button><MdEmail/></button>
                    </Link>
                    <Link href={`https://wa.me/?text=${encodeURI(`Please check this amazing post titled '${post.title}' in the next URL:`)+`%0Ahttps://blog-rafael-anguiano.vercel.app/post/${post.id} %0A`}`} target="_blank" rel="noreferrer">
                        <button><FaWhatsapp/></button>
                    </Link>
                    <Link href={`https://twitter.com/intent/tweet?text=${encodeURI(`Hey! Check out this Interesting Post:`)+`%0Ahttps://blog-rafael-anguiano.vercel.app/post/${post.id} %0A`}`} target="_blank" rel="noreferrer">
                        <button><FaTwitter/></button>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default Post