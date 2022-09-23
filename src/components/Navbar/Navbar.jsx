import React from 'react'
import { Link, NavLink } from 'react-router-dom'
//components
import CartWidget from './CartWidget/CartWidget'
//styles
import './Navbar.scss'

const Navbar = () => {
    return (
        <header className='header'>
            <div>
                <div className='logo' href='/'>
                    <Link to='/'><span className='logo__subrayado'>MARBIS</span></Link>
                </div>
            </div>

            <ul className='header__list'>
                <li className='header__li'><Link to="/">Inicio</Link></li>
                <li className='header__li'><Link to='/'>Productos</Link></li>
                <li className='header__li'><Link to='/ofertas'>Ofertas</Link></li>
                <li className='header__li'><Link to='/contacto'>Contacto</Link></li>
            </ul>

            <CartWidget/>
        </header>
    )
}

export default Navbar