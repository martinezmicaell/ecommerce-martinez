import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

//component
import {RiShoppingCartLine} from 'react-icons/ri';

//styles
import './CartWidget.scss'

//!Pasar a RiShoppingCartLine la prop de getItemCantity

const CartWidget = () => {
    //context
    const {getItemCantity} = useContext(CartContext)

    return (
        <RiShoppingCartLine className='cart' size={25}/>
    )
}

export default CartWidget