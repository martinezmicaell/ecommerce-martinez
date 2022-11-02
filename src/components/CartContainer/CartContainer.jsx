import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import CheckoutForm from '../CheckoutForm/CheckoutForm';


//styles
import styles from './CartContainer.module.scss'

const VoidCart = () => {
    return (
        <div className={styles.voidCart__container}>
            <h3 className={styles.voidCart__h3}>Agrega tus productos al carrito!</h3>
            <Link to="/" className={styles.voidCart__linkGoToBuy}>Ir a comprar</Link>
        </div>
    )
}

const CartContainer = () => {
    const { cart, getItemPrice } = useContext(CartContext);
    const totalPrice = getItemPrice().toLocaleString('es-AR', {style: "currency", currency: "ARS"});

    return (
        <>
            {cart[0] === undefined ? (<VoidCart />) : (
            <>
                <section className={styles.cart__section} >
                    <h2 className={styles.cart__title}>Detalle de tu carrito</h2>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item}/>
                    ))}
                </section>

                    <div className={styles.goToBuy__container}>
                        <Link to="/" className={styles.goToBuy}>SEGUIR COMPRANDO</Link>
                    </div>
                <div className={styles.cart__calculation}>

                    <div className={styles.cart__totals}>
                        <div className={styles.cart__total}>
                            <span>TOTAL DE LA COMPRA:</span>
                            <span className={styles.cart__totalNumber}>{totalPrice}</span>
                        </div>

                        {/* Export to other component with route checkout/:orderId */}
                        <CheckoutForm />
                        {/* Export to other component */}
                    </div>
                </div>

            </>
            )}
        </>
    )
}

export default CartContainer