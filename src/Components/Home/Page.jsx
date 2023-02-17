import React, { useState, useEffect } from 'react'
import axios from 'axios'
import About from '../About'
import {FaRegComment} from 'react-icons/fa'
import { useParams } from 'react-router-dom'

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

    let { id } = useParams()
    const [post, setPost] = useState(page)


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