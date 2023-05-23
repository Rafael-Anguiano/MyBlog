import ColumnTwo from './components/ColumnTwo'
import Navigation from './components/Navigation'
import '../styles/globals.css'
import Head from 'next/head'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>Rafael Anguiano | Blog</title>
        <meta property='og:title' content='Rafael Anguiano | Blog' key='title' />
        <meta property='og:type' content='website' key='type' />
        <meta property='og:image' content='/images/image.png' key='image' />
        <meta property='og:url' content='https://blog-rafael-anguiano.vercel.app/' key='url' />
        <meta property='og:description' content='Hi All :) Check out my blog' key='description' />
      </Head>
      <body>
        <main>
          <Navigation />
          <div className='columns'>
            {children}
            <ColumnTwo />
          </div>
        </main>
      </body>
    </html>
  )
}
