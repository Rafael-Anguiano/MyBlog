import ColumnTwo from "./components/ColumnTwo";
import Navigation  from "./components/Navigation";
import "../styles/globals.css"

export default function RootLayout({children}) {

  return (
    <html lang="en">
      <head>
        <title>Rafael Anguiano | Blog</title>
        <meta property="og:title" content="Rafael Anguiano | Blog" data-react-helmet="true"/>
        <meta property="og:type" content="website" data-react-helmet="true"/>
        <meta property="og:image" content="/images/image.png" data-react-helmet="true"/>
        <meta property="og:url" content="https://blog-rafael-anguiano.vercel.app/" data-react-helmet="true"/>
        <meta property="og:description" content="Hi All :) Check out my blog" data-react-helmet="true"/>
      </head>
      <body>
        <main>
          <Navigation />
          <div className="columns">
            {children}
            <ColumnTwo/>
          </div>
        </main>
      </body>
    </html>
  );
}