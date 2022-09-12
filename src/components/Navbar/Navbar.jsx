import React from 'react'

//components
import CartWidget from './CartWidget/CartWidget'
//styles
import './Navbar.scss'

const Navbar = () => {
    return (
        <header className='header'>
            <div>
                <div className='logo' href='/'>
                    <span className='logo__subrayado'>MARBIS</span>
                </div>
            </div>

            <ul className='header__list'>
                <li className='header__li'><a href="/">Inicio</a></li>
                <li className='header__li'><a href="/">Productos</a></li>
                <li className='header__li'><a href="/">Ofertas</a></li>
                <li className='header__li'><a href="/">Contacto</a></li>
            </ul>

            <CartWidget/>
        </header>
    )
}

export default Navbar