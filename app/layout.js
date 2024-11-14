import Header from './components/Header'
import Head from 'next/head'
import '../styles/globals.css'

export async function generateMetadata () {
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
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
