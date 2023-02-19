import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate()
  return (
    <header className="App-header">
      <h1 className='name' onClick={() => navigate('/')}>Rafael</h1>
      <nav>
        <ul>
          <li className='home-btn'><button onClick={() => navigate('/')}>Home</button></li>
          <li className='contact-btn'><button onClick={() => navigate('/contact')}>Contact me</button></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header