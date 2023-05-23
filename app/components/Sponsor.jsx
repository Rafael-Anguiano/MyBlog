"use client"
import { useState } from 'react'
import Link from 'next/link'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const Sponsor = () => {
    const [hover, setHover] = useState(false)
    return (
    <article className='about sponsor'>
      <Link href='https://github.com/sponsors/Rafael-Anguiano?o=sd&sc=t' target={"_blank"} rel="noreferrer" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
        {hover?
            <BsHeartFill className='icon title-hovered'/>
            :<BsHeart className='icon'/>
        }
      </Link>
      <Link href='https://github.com/sponsors/Rafael-Anguiano?o=sd&sc=t' target={"_blank"} rel="noreferrer">
        <h3 className={hover? "title-hovered" : ""} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>Become a Sponsor!</h3>
      </Link>
      <small>Support my open source work! It would help me to follow my dreams and ideas</small>

    </article>
  )
}

export default Sponsor