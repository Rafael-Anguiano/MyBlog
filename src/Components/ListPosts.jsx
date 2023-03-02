import React from 'react'
// import axios from 'axios';
import { Link } from 'react-router-dom';
import {HiArrowRight} from 'react-icons/hi'

// const API_KEY = process.env.REACT_APP_API_KEY
// const BLOG_ID = process.env.REACT_APP_BLOG_ID

const ListPosts = ({list= [], setPage}) => {

    const handleClick = (item) => {
        setPage(item)
    }

    return (
        <article className='recent-post'>
            <h3>Recent Posts</h3>
            <ul>
                {list?.map((item, index) => {
                    return (
                        <li key={item?.id}>
                            <Link to={`/post/${item?.id}`} className="list-item" onClick={()=>handleClick(item)}><span>{index+1}. </span>{item?.title}</Link>
                            <HiArrowRight/>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}

export default ListPosts