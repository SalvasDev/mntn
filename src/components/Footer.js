import React from 'react'
import Socialbar from './Socialbar'

const Footer = () => {
  return (
    <>
    <div className="footer__container wrapper">
      <div className="company">
        <h3 className="logo small">MNTN</h3>
        <p className="text__company">Get out there & discover your next <br/> slope, mountain & destination!</p>    
        <p className="copyrights">Copyright 2019 MNTN, Inc. Terms & Privacy. Code by Salvador Sánchez</p>
      </div>

      <div className="more__features">

            <div className="features">
                <h3>More on The Blog</h3>
                <a href="about">About MNTN</a>
                <a href="about">Contributors & Writers</a>
                <a href="about">Write For Us</a>
                <a href="about">Contact Us</a>
                <a href="about">Privacy Policy</a>

            </div>
             <div className="features">
                <h3>More on MNTN</h3>
                <a href="about">The Team</a>
                <a href="about">Jobs</a>
                <a href="about">Press</a>
            </div>
            
      </div>
    </div>
    <Socialbar />
  </>  
  )
}

export default Footer
