import React, {useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { createBuyOrder } from '../../services/firestore'
import Checkout from '../Checkout/Checkout'
//css
import styles from './CheckoutForm.module.scss'

const CheckoutForm = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        phone: "",
        mail: "",
        direccion: "",
    })

    const navigate = useNavigate();
    const {getItemPrice, cart, emptyCart} = useContext(CartContext)

    const handleChangeInput = (e) => {
        let inputName = e.target.name;
        let value = e.target.value

        const newDataForm = {...dataForm}
        newDataForm[inputName] = value;
        setDataForm(newDataForm)

    }

    const handleCheckout = (e) => {
        e.preventDefault();

        const orderData = {
            buyer: dataForm,
            items: cart,
            total: getItemPrice(),
        }

        //pay method, if is true =>
        createBuyOrder(orderData).then(orderId => {
            navigate(`/checkout/${orderId}`)
            emptyCart()
                //Este es tu id y tu compra, gracias por tu compra, te esperamos de nuevo!
        })
    }


  return (
    <div className={styles.form__container}>
        <h3 className={styles.form__title}>Rellená estos datos así te enviamos tu pedido!</h3>
        <form onSubmit={handleCheckout} className={styles.form__wrapper}>
            <div className={styles.form__item}>
                <input onChange={handleChangeInput} className={styles.form__input} type="text" name="name" placeholder="Nombre" value={dataForm.name}required/>
            </div>

            <div className={styles.form__item}>
                <input onChange={handleChangeInput} className={styles.form__input} type="tel" name="phone" placeholder="Teléfono" value={dataForm.phone} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
            </div>

            <div className={styles.form__item}>
                <input onChange={handleChangeInput} className={styles.form__input} type="text" name="mail" placeholder="Mail" value={dataForm.mail}required/>
            </div>

            <div className={styles.form__item}>
                <input onChange={handleChangeInput} className={styles.form__input} type="text" name="direccion" placeholder="Dirección" value={dataForm.direccion}required/>
            </div>


            <button className={styles.link__finishBuy}>FINALIZAR COMPRA</button>

        </form>
    </div>
  )
}

export default CheckoutForm