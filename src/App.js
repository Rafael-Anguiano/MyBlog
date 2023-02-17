import { useState, useEffect } from 'react';
import axios from "axios";

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Page from './Components/Page'
import ErrorPage from './Components/ErrorPage';

import { Routes, Route  } from "react-router-dom";
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY
const BLOG_ID = process.env.REACT_APP_BLOG_ID

function App(){
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
      <Header/>
      <main>
        <Routes>
          <Route 
            exact
            path='/' 
            element={<Home posts={posts} setPage={setPage}/>} 
            errorElement={<ErrorPage/>}
          />
          <Route 
            exact 
            path='/contact' 
            element={<Contact/>} 
            errorElement={<ErrorPage/>}
            />
          <Route
            path='/post/:id' 
            element={<Page page={page}/>} 
            errorElement={<ErrorPage/>}
            loader={async ({ params }) => `/post/${params.id}`}
            />
          <Route 
            exact
            path='*' 
            element={<Home posts={posts} setPage={setPage}/>} 
            errorElement={<ErrorPage/>}
            />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
