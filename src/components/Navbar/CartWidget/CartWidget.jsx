import React from 'react'

//component
import {RiShoppingCartLine} from 'react-icons/ri';

//styles
import './CartWidget.scss'
const CartWidget = () => {
  return (
    <RiShoppingCartLine className='cart' size={25}/>
  )
}

export default CartWidget