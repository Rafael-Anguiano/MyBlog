import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ColumnTwo from './ColumnTwo'
import SEO from './SEO'
import {FaRegComment} from 'react-icons/fa'
import { useParams, useLocation } from 'react-router-dom'
import { getDescription, getImage } from '../functions/gets'

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

const Page = ({page = defPost, posts, setPage}) => {
    
    let { id } = useParams()
    const [post, setPost] = useState(page)
    const location = useLocation();
    let image = getImage(post?.content)
    let description = getDescription(post?.content)

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
            <SEO title={post?.title} image={image} pathname={location.pathname} description={description}/>
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
            <ColumnTwo list={posts} setPage={setPage}/>
        </div>
    )
}

export default Page