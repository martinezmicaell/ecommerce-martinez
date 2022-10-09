import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './BurgerButton.scss'


const BurgerButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    const hamburger = document.querySelector('.menu-btn__burger');
    const nav = document.querySelector('.nav');
    const menuNav = document.querySelector('.menu-nav');
    const navItems = document.querySelectorAll('.menu-nav__item');


    const handleBurgerButton = () => {
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

    const handleClickLi = () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        setShowMenu(false);
    }

  return (
    <>
        <div className="menu-btn" onClick={handleBurgerButton}>
            <span className="menu-btn__burger"></span>
        </div>

        <nav className="nav">
            <ul className="menu-nav">
                <li className="menu-nav__item active">
                    <Link to="/" className="menu-nav__link" onClick={handleClickLi}>
                        Inicio
                    </Link>
                </li>
                <li className="menu-nav__item">
                    <Link to="/category/prendas" className="menu-nav__link" onClick={handleClickLi}>
                        Prendas
                    </Link>
                </li>
                <li className="menu-nav__item">
                    <Link to="/category/zapatos" className="menu-nav__link" onClick={handleClickLi}>
                        Zapatos
                    </Link>
                </li>
                <li className="menu-nav__item">
                    <Link to="/contacto" className="menu-nav__link" onClick={handleClickLi}>
                        ¿Quienes somos?
                    </Link>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default BurgerButton