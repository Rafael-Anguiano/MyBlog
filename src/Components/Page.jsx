import React, {useState, useEffect} from 'react'

const Post = () => {

    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    useEffect(() => {
        axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`)
        .then(function ({data}) {
            setTitle(data.items[0].title)
            setContent(data.items[0].content)
        })
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}} />
        </div>
    )
}

export default Post