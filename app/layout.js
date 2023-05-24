import ColumnTwo from './components/ColumnTwo'
import Navigation from './components/Navigation'
import '../styles/globals.css'
import Head from 'next/head'
import image from '/images/image.png'

export const metadata = {
  title: 'Rafael Anguiano | Blog',
  description: 'Hi Everyone :) Check out my blog',
  url: 'https://blog-rafael-anguiano.vercel.app/',
  type: 'website'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>Rafael Anguiano | Blog</title>
        <meta property='og:image' content={image} />
        {/* <meta property='og:image' content='/images/image.png' /> */}
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
