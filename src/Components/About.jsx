import React from 'react'

import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';

const About = () => {
  return (
    <section className='cards'>
        <article className='about'>
        <img alt='' src="./me.jpg"/>
        <small>I am an engineering student motivated to learn and grow both professionally and personally.</small>
        <div>
          <a href={'https://www.linkedin.com/in/rafael-anguiano/'} target="_blank" rel="noreferrer"><button><FaLinkedin/></button></a>
          <a href={'mailto:rj.anguiano.23@gmail.com'} target="_blank" rel="noreferrer"><button><MdEmail/></button></a>
          <a href={'https://wa.me/+523331504871'} target="_blank" rel="noreferrer"><button><FaWhatsapp/></button></a>
          <a href={'https://twitter.com/Rezuks23'} target="_blank" rel="noreferrer"><button><FaTwitter/></button></a>
        </div>
        </article>
    </section>
  )
}

export default About