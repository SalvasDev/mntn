import React from 'react'
import arrow from '../img/arrow_downward_24px.svg'

const Hero = () => {
  return (
    <div className="hero__container">
        <div className="hero__text">
            <div className="subtitle__group">
                <div className="line"></div>
                <h2>A HIKING GUIDE</h2>                            
            </div>
            <h1 className="title animate__animated animate__fadeInUp">
                <span className="title__text">Be prepared for the</span>
                <br/>
                <span className="title__text">Mountains and beyond!</span>
            </h1>    
            <div className="scroll__group">
                <p>scroll down</p>
                <img className="animate__animated animate__heartBeat" src={arrow} alt="Arrow scroll down" />
            </div>
        </div>
    </div>

  )
}

export default Hero
