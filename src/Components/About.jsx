import React from 'react'

import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <section className='cards'>
        <article className='about'>
        <img alt='' src="./me.jpg"/>
        <small>I am an engineering student motivated to learn and grow both professionally and personally.</small>
        <div>
          <a href={'https://twitter.com/Rezuks23'} target="_blank" rel="noreferrer"><button><FaTwitter/></button></a>
          <a href={'https://www.linkedin.com/in/rafael-anguiano/'} target="_blank" rel="noreferrer"><button><FaLinkedin/></button></a>
          <a href={'https://www.instagram.com/anguianorafael/'} target="_blank" rel="noreferrer"><button><FaInstagram/></button></a>
        </div>
        </article>
    </section>
  )
}

export default About