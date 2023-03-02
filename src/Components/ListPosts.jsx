import React from 'react'
import { Link } from 'react-router-dom';
import {HiArrowRight} from 'react-icons/hi'

const ListPosts = ({list}) => {
    return (
        <article className='recent-post'>
            <h3>Recent Posts</h3>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <Link to={`/post/${item.id}`} className="list-item"><span>{index+1}. </span>{item.title}</Link>
                            <HiArrowRight/>
                        </li>
                    )
                })}
            </ul>
        </article>
    )
}

export default ListPosts