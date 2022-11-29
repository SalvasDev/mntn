import React from 'react'
import instagram from '../img/Instagram.svg'
import twitter from '../img/twitter.svg'


const Socialbar = () => {
  return (
    <div className="social__bar">
      <span className="follow">Follow</span>
      <a href="#start"><img className="icon" src={instagram} alt="Icon instagram" /></a>
      <a href="#start"><img className="icon" src={twitter} alt="Icon twitter" /></a>
    </div>
  )
}

export default Socialbar
