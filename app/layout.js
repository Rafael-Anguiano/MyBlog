import ColumnTwo from './components/ColumnTwo'
import Navigation from './components/Navigation'
import '../styles/globals.css'
import Head from 'next/head'

export async function generateMetadata ({ params, searchParams }, parent) {
  return {
    title: 'Rafael Anguiano | Blog',
    openGraph: {
      images: ['/images/image.png'],
      description: 'Hi Everyone :) Check out my blog',
      url: 'https://blog-rafael-anguiano.vercel.app/',
      type: 'website'
    }
  }
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
