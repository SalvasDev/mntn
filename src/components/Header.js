import React, { useState } from 'react'
import accounticon from '../img/account_circle_24px.svg'
import SideMenu from './SideMenu'

const Header = () => {


const [activemenu, setActiveMenu] = useState(false)

    const handleMenu = (e) => {
        e.preventDefault()
        setActiveMenu(true)    
    }

    return (
    <>
        <section className="header__section" id='start'>
          
        {activemenu && <SideMenu setActiveMenu={setActiveMenu} />}

          <span className="logo">MNTN</span>

            {/* <!-- burger menu --> */}
            <div onClick={e => handleMenu(e)} className="container__menu" id="container__menu">
              <button className="btn__burg" id="btn__burg">
                <div className="line1__btn-burg"></div>
                <div className="line2__btn-burg"></div>
                <div className="line3__btn-burg"></div>
              </button>
            </div>
        

            <nav className="nav">
              <a href="equipment" className="nav__item">Equipment</a>
              <a href="about" className="nav__item">About us</a>
              <a href="blog" className="nav__item">Blog</a>
            </nav>

            <button className="account__btn">
                <img className="account__icon" src={accounticon} alt="" />
                <p className="account__text">Account</p>
            </button>
        </section>
    </>
  )
}

export default Header
