import './App.css';

import { useState, useEffect } from 'react';
import axios from "axios";
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Page from './Components/Page'

import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

function App(){

  const [activePage, setActivePage] = useState('Home');
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState()

  useEffect(() => {
    axios.get(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`)
      .then(function ({data}) {
        setPosts(data.items)
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={() => setActivePage('Home')} className='name'>Rafael</h1>
        <nav>
          <ul>
            <li><button onClick={() => setActivePage('Home')}>Home</button></li>
            <li><button onClick={() => setActivePage('Contact')}>Contact me</button></li>
          </ul>
        </nav>
        <div className='social-links'>
          <a href={'https://www.linkedin.com/in/rafael-anguiano/'} target="_blank" rel="noreferrer"><button><FaLinkedin/></button></a>
          <a href={'mailto:rj.anguiano.23@gmail.com'} target="_blank" rel="noreferrer"><button><MdEmail/></button></a>
          <a href={'https://wa.me/+523331504871'} target="_blank" rel="noreferrer"><button><FaWhatsapp/></button></a>
          <a href={'https://twitter.com/Rezuks23'} target="_blank" rel="noreferrer"><button><FaTwitter/></button></a>
        </div>
      </header>

      <main>
        {
          activePage === 'Home' 
          ? <Home posts={posts} setActivePage={setActivePage} setPage={setPage}/>
          : activePage==='Contact'
          ? <Contact/>
          : <Page post={page}/>
        }
      </main>

      <footer>
        <h1 className='name'>Rafael</h1>
        <small className='overline'>Created by: Rafael Anguiano.</small>
      </footer>
    </div>
  );
}

export default App;
