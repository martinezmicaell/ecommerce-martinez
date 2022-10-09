import React, {useState} from 'react'

import './BurgerButton.scss'


const BurgerButton = () => {
    const [showMenu, setShowMenu] = useState(false);


    const handleBurgerButton = () => {
        const hamburger = document.querySelector('.menu-btn__burger');
        const nav = document.querySelector('.nav');
        const menuNav = document.querySelector('.menu-nav');
        const navItems = document.querySelectorAll('.menu-nav__item');

        if(!showMenu) {
            hamburger.classList.add('open');
            nav.classList.add('open');
            menuNav.classList.add('open');
            navItems.forEach(item => item.classList.add('open'));

            setShowMenu(true);
        } else {
            hamburger.classList.remove('open');
            nav.classList.remove('open');
            menuNav.classList.remove('open');
            navItems.forEach(item => item.classList.remove('open'));

            setShowMenu(false);
        }


    }

  return (
    <>
        <div className="menu-btn" onClick={handleBurgerButton}>
            <span className="menu-btn__burger"></span>
        </div>

        <nav className="nav">
            <ul className="menu-nav">
                <li className="menu-nav__item active">
                    <a href="/" className="menu-nav__link">
                        Inicio
                    </a>
                </li>
                <li className="menu-nav__item">
                    <a href="about.html" className="menu-nav__link">
                        Prendas
                    </a>
                </li>
                <li className="menu-nav__item">
                    <a href="projects.html" className="menu-nav__link">
                        Zapatos
                    </a>
                </li>
                <li className="menu-nav__item">
                    <a href="contact.html" className="menu-nav__link">
                        ¿Quienes somos?
                    </a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default BurgerButton