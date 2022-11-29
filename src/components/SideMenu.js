import React, { Fragment } from 'react'
import close from '../img/close.svg'


const SideMenu = ({ setActiveMenu }) => {


    const handleClick = e => {
        e.preventDefault()

        var contMenu = document.querySelector('.container__menu')
        contMenu.classList.add('animate__fadeOutUp')

        setActiveMenu(false)
        contMenu.classList.display = 'none'
        
    }

    return (
        <Fragment>
            <div className='menu__container animate__animated animate__fadeInDown'>               

                <nav className="burger__menu">

                    <button
                    className="close__button"
                    onClick={e => handleClick(e)}
                >
                   <img src={close} alt="" />
                </button>
                    <a href="home">Home</a>
                    <a href="#galería">Equipment</a>
                    <a href="#servicios">About us</a>
                    <a href="nosotros">Blog</a>                    
                </nav>

            </div>
        </Fragment>
    )
}

export default SideMenu
