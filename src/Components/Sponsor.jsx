import React, {useState}from 'react'
import {BsHeart, BsHeartFill} from 'react-icons/bs'

const Sponsor = () => {
    const [hover, setHover] = useState(false)
    return (
    <article className='about sponsor'>
      <a href='https://github.com/sponsors/Rafael-Anguiano?o=sd&sc=t' target={"_blank"} rel="noreferrer" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
        {hover?
            <BsHeartFill className='icon'/>
            :<BsHeart className='icon'/>
        }
      </a>
      <a href='https://github.com/sponsors/Rafael-Anguiano?o=sd&sc=t' target={"_blank"} rel="noreferrer" onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}>
        <h3 className={hover? "title-hovered" : ""}>Become a Sponsor!</h3>
      </a>
      <small>Support my open source work! It would help me to follow my dreams and ideas</small>

    </article>
  )
}

export default Sponsor