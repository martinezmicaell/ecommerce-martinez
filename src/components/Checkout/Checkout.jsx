import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOrderId } from '../../services/firestore';
import CheckoutDetail from '../CheckoutDetail/CheckoutDetail';
import Spinner from '../Spinner/Spinner';

//css
import styles from './Checkout.module.scss'

const Checkout = () => {
    const [isloading, setIsLoading] = useState(true);
    const [dataOrder, setDataOrder] = useState({});
    const {orderId} = useParams();

    useEffect(() => {
        getOrderId(orderId).then(dataSingleOrder => {
            setDataOrder(dataSingleOrder)
        })

        .finally(() => setIsLoading(false))

    }, [orderId])


  return (
    <>
        {isloading ? <Spinner /> :
        <>
            {dataOrder.hasOwnProperty('err') ? <p>{dataOrder.err}</p> :
                <section className={styles.checkout__section}>
                    <div className={styles.checkout__successAd}>
                        <h1  className={styles.checkout__title}>Tu pago se acreditó correctamente! 🥳</h1>
                        <p className={styles.checkout__orderId}>El ID de tu compra es: {orderId}</p>
                        <h3 className={styles.checkout__numberFollow}>Pronto te enviaremos el número de seguimiento de tu envío por mail!</h3>
                        <p>¡Gracias por elegirnos!</p>
                    </div>

                    {/* console.log(docSnap.data().items[0].detail + 'DATA ORDER EXAMPLE') */}
                    <h2>Lo que compraste:</h2>
                    <ul className={styles.checkoutDetail__container}>
                        {dataOrder.items.map(itemSeller => {
                            return(
                                <li key={itemSeller.id} id={itemSeller.id} className={styles.checkoutDetail__list}>
                                    <CheckoutDetail key={itemSeller.id} itemSeller={itemSeller} />
                                </li>
                            )
                        })}
                    </ul>
                    <h2 className={styles.checkoutDetail__totalPrice}>Lo que pagaste en total: &nbsp;&nbsp;<span className={styles.checkoutDetail__price}>{dataOrder.total.toLocaleString('es-AR', { style: 'currency', currency: 'ARS'})}</span></h2>

                    <Link to="/" className={styles.link__finishBuy}>Volver al Inicio</Link>
                </section>
            }
        </>}

    </>
)}

export default Checkout