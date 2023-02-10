import { useState } from 'react';
import './App.css';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function App() {

  const [activePage, setActivePage] = useState('Home');

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='name'>Rafael</h1>
        <nav>
          <ul>
            <li><button onClick={() => setActivePage('Home')}>Home</button></li>
            <li><button onClick={() => setActivePage('Contact')}>Contact me</button></li>
            <li><button>About</button></li>
          </ul>
        </nav>
        <div className='social-links'>
          <button><FaTwitter/></button>
          <button><FaLinkedin/></button>
          <button><FaInstagram/></button>
        </div>
      </header>

      <main>
        {
          activePage === 'Home' 
          ? <Home/>
          : <Contact/>
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
