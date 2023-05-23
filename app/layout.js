import ColumnTwo from './components/ColumnTwo'
import Navigation from './components/Navigation'
import '../styles/globals.css'
import Head from 'next/head'

export const metadata = {
  title: 'Rafael Anguiano | Blog',
  description: 'Hi All :) Check out my blog',
  url: 'https://blog-rafael-anguiano.vercel.app/',
  images: ['image.png'],
  type: 'website'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <Head>
        <title>Rafael Anguiano | Blog</title>
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
