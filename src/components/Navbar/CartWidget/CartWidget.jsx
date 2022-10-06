import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

import { Link } from 'react-router-dom';

//component
import {RiShoppingCartLine} from 'react-icons/ri';

//styles
import './CartWidget.scss'

//!Pasar a RiShoppingCartLine la prop de getItemCantity

const CartWidget = () => {
    //context
    const {getItemCantity} = useContext(CartContext)

    return (
        <div className='cart__wrapperIcon'>
            <Link className='cart__link' to="/cart">
                <i className='cart__count'>{getItemCantity() > 0 && getItemCantity()}</i>
                <RiShoppingCartLine className='cart__icon' size={25}/>
            </Link>

        </div>
    )
}

export default CartWidget