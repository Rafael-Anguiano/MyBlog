import React, { useState, useEffect } from 'react'
import axios from 'axios'
import About from './About'
import {FaRegComment} from 'react-icons/fa'
import { useParams, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

let defPost = {
    "published": "",
    "title": "",
    "content": "",
    "author": {
        "displayName": "",
        "image": {
            "url": ""
        }
    },
    "replies": {
        "totalItems": "",
    },
}

const Page = ({page = defPost}) => {

    const getImage = (content) => {
        const searchTerm = 'src=';
        const searchEnd = '"'
        const startOfSource = content.indexOf(searchTerm)+5;
        let image = content.slice(startOfSource)
        const endOfSource = image.indexOf(searchEnd);
        image = image.slice(0, endOfSource)
        return `${image}`
    }

    
    let { id } = useParams()
    const [post, setPost] = useState(page)
    const location = useLocation();
    let image = getImage(post?.content)

    useEffect(() => {
        if(page === defPost){
            axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`)
                .then(function ({data}) {
                    setPost(data)
                })
        }
    });

    return (
        <div className='columns-page'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{post.title}</title>
                <meta property="og:title" content={post.title}/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={image}/>
                <meta property="og:url" content={`https://blog-rafael-anguiano.vercel.app${location.pathname}`}></meta>
            </Helmet>
            <section className='page'>
                <h2>{post?.title}</h2>
                <div className='details'>
                    <img alt='' className='autor' src={post?.author.image.url}/>
                    <small>{post?.author.displayName}</small>
                    <div className='dot'></div>
                    <small>{post?.published.substring(0, 10)}</small>
                    <div className='dot'></div>
                    <FaRegComment/>
                    <small>{post?.replies.totalItems}</small>
                </div>
                <div dangerouslySetInnerHTML={{__html: post?.content}} className='content'/>
            </section>
            <About/>
        </div>
    )
}

export default Page