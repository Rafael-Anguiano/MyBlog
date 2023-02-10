import React from 'react'

const Post = ({title, content}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}} />
        </div>
    )
}

export default Post