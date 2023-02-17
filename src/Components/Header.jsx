import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Header = () => {
  let navigate = useNavigate()
  return (
    <header className="App-header">
      <h1 className='name' onClick={() => navigate('/')}>Rafael</h1>
      <nav>
        <ul>
          <li><button onClick={() => navigate('/')}>Home</button></li>
          <li><button onClick={() => navigate('/contact')}>Contact me</button></li>
        </ul>
      </nav>
      <div className='social-links'>
        <a href={'https://www.linkedin.com/in/rafael-anguiano/'} target="_blank" rel="noreferrer"><button><FaLinkedin/></button></a>
        <a href={'mailto:rj.anguiano.23@gmail.com'} target="_blank" rel="noreferrer"><button><MdEmail/></button></a>
        <a href={'https://wa.me/+523331504871'} target="_blank" rel="noreferrer"><button><FaWhatsapp/></button></a>
        <a href={'https://twitter.com/Rezuks23'} target="_blank" rel="noreferrer"><button><FaTwitter/></button></a>
      </div>
    </header>
  )
}

export default Header