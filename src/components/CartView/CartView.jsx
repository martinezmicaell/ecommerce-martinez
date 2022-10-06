import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartView = () => {
    const { cart } = useContext(CartContext);
    return (
        <>
            {console.log(cart)}
            {cart[0] == undefined ? (<h3>Agrega tus productos al carrito!</h3>) :
            cart.map(item => (
                <h3 key={item.id}>{item.title}</h3>
            ))
            }
        </>
    )
}

export default CartView;