import React, {useState}from 'react'
import {BsHeart, BsHeartFill} from 'react-icons/bs'

const Sponsor = () => {
    const [hover, setHover] = useState(false)
    const hoverHandle = () => {
        setHover(!hover)
    }
    return (
    <article className='about sponsor'>
      <a href='https://github.com/sponsors/Rafael-Anguiano?o=sd&sc=t' target={"_blank"} rel="noreferrer" onMouseOver={hoverHandle()} onMouseOut={hoverHandle()}>
        {hover?
            <BsHeartFill className='icon'/>
            :<BsHeart className='icon'/>
        }
      </a>
      <small>Support my open source work! It would help me to follow my dreams and ideas</small>

    </article>
  )
}

export default Sponsor