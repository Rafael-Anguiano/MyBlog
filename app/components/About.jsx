import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail} from 'react-icons/md';
import Link from 'next/link';

import Image from 'next/image';

const About = () => {
  return (
    <article className='about'>
      <Image alt='' src="/images/me.jpg" width={100} height={100} className='img'/>
      <small>Hi All ! 😁 I´m a Software Engineer who is really passionate about technology and programming. I have a Bachelors Degree in Computer Software Engineering, and I love to develop for fun and learn new things.</small>
      <div>
        <Link href={'https://www.linkedin.com/in/rafael-anguiano/'} target="_blank" rel="noreferrer"><button><FaLinkedin/></button></Link>
        <Link href={'mailto:rj.anguiano.23@gmail.com'} target="_blank" rel="noreferrer"><button><MdEmail/></button></Link>
        <Link href={'https://wa.me/+523331504871'} target="_blank" rel="noreferrer"><button><FaWhatsapp/></button></Link>
        <Link href={'https://twitter.com/Rezuks23'} target="_blank" rel="noreferrer"><button><FaTwitter/></button></Link>
      </div>
    </article>
  )
}

export default About