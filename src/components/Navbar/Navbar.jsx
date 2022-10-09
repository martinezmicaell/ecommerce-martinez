import React from 'react'
import { Link, NavLink } from 'react-router-dom'

//components
import BurgerButton from './BurgerButton/BurgerButton'
import CartWidget from './CartWidget/CartWidget'

//styles
import './Navbar.scss'

const Navbar = () => {

    return (
        <header className='header'>

            <BurgerButton />

            <div>
                <div className='logo' href='/'>
                    <Link to='/'><span className='logo__subrayado'>MARBIS</span></Link>
                </div>
            </div>

            <ul className='header__list'>
                <li className='header__li'><NavLink to="/" end className={({ isActive }) => (isActive ? 'active__link' : 'header__li')}
                >Inicio</NavLink></li>
                <li className='header__li'><NavLink to="/category/prendas" className={({ isActive }) => (isActive ? 'active__link' : 'header__li')}
                >Prendas</NavLink></li>
                <li className='header__li'><NavLink to="/category/zapatos" className={({ isActive }) => (isActive ? 'active__link' : 'header__li')}
                >Zapatos</NavLink></li>
                <li className='header__li'><NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active__link' : 'header__li')}
                >Contacto</NavLink></li>
            </ul>

            <CartWidget />
        </header>
    )
}

export default Navbar