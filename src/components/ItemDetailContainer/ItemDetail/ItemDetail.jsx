import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

//components
import ItemCount from '../../ItemCount/ItemCount';

//styles
import styles from './ItemDetail.module.scss'

const ItemDetail = ({data: {id, title, price, detail, img, stock}}) => {
    const [count, setCount] = useState(1);
    const [inCart, setInCart] = useState(false);

    const { addItem } = useContext(CartContext);

    // const onAdd = () => {
    //     addItem(detalle, count)
    // }

    const handleAddToCart = (count) => {
        alert(`Agregaste al carrito: ${count}`)
        //     addItem(detalle, count)
        setInCart(inCart => !inCart)
    }

    const GoToCart = () => {
        return(
            <div className={styles.wrapper__goToCart}>
                <button className={styles.button__goToCart}><Link className={styles.link} to="/cart">Terminar compra</Link></button>
                <span className={styles.goToCartSpan}>o</span>
                <Link className={styles.linkFollowingBuy} to="/">Seguir Comprando</Link>
            </div>
        )
    }


    return (
        <article key={id} className={styles.section__article}>
            <div className={styles.article__wrapper}>
                <figure className={styles.wrapper__img}>
                    <img className={styles.article__img} src={img} alt="" />
                </figure>

                    <div className={styles.article__description}>
                        <h2 className={styles.article__title}>{title}</h2>
                        <p className={styles.article__detail}>{detail}</p>

                    {!inCart ? <ItemCount price={price} stock={stock} initial={1} onAddToCart={handleAddToCart}/> : <GoToCart />}


                    </div>
            </div>
        </article>
    )
}

export default ItemDetail