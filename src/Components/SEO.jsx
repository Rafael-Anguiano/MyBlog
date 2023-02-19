import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({title, image, pathname, description}) => {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta property="og:title" content={title}/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={image}/>
        <meta property="og:url" content={`https://blog-rafael-anguiano.vercel.app${pathname}`}/>
        <meta property="og:description" content={description} />
        <meta
            name="description"
            content={description}
        />
    </Helmet>
  )
}

export default SEO