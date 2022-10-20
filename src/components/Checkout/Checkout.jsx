import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getOrderId } from '../../services/firestore';
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
                    <h1  className={styles.checkout__title}>Tu pago se acreditó correctamente! 🥳</h1>
                    <p className={styles.checkout__orderId}>El ID de tu compra es: {orderId}</p>
                    <h3 className={styles.checkout__numberFollow}>Pronto te enviaremos el número de seguimiento de tu envío</h3>
                    <p>¡Gracias por elegirnos!</p>
                </section>
            }
        </>}

    </>
)}

export default Checkout