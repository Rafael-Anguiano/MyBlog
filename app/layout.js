import ColumnTwo from './components/ColumnTwo'
import Navigation from './components/Navigation'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Rafael Anguiano | Blog</title>
        <meta property='og:title' content='Rafael Anguiano | Blog' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/images/image.png' />
        <meta property='og:url' content='https://blog-rafael-anguiano.vercel.app/' />
        <meta property='og:description' content='Hi All :) Check out my blog' />
      </head>
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
