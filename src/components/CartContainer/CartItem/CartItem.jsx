import React, {useState, useContext} from 'react'

//styles
import styles from './CartItem.module.scss';

//components
import Count from '../../Count/Count';

//context
import { CartContext } from '../../../context/CartContext';


const CartItem = ({item}) => {
    const [count, setCount] = useState(item.quantity);
    const { deleteItem } = useContext(CartContext);

    const {title, talle = "M", price, stock, img, id} = item;

    const handleRemove = (id) => {
        deleteItem(id)
    }



  return (
    <article className={styles.item__wrapper}>
        <div className={styles.item__detail}>
            <figure>
                <img className={styles.item__img} src={img} alt={title} width={600} height={900} />
            </figure>

            <div className={styles.item__description}>
                <h3 className={styles.item__title}>{title}</h3>
                <h3 className={styles.item__title}>Talle {talle}</h3>
                <button className={styles.item__remove} onClick={() => handleRemove(id)}>Remover Item</button>
            </div>
        </div>

        <div className={styles.flexCenter}>
            <div className={styles.flexRow}>
                <span className={styles.item__subtitle}>Cantidad</span>
                <Count count={count} item={item} setCount={setCount} stock={stock}/>
            </div>
        </div>

        <div className={styles.flexCenter}>
            <div className={styles.flexRowStart}>
                <span className={styles.item__subtitleQantity}>Precio</span>
                <span className={styles.item__price}>{(count * price).toLocaleString('es-AR', {style: "currency", currency: "ARS"})}</span>
            </div>
        </div>

        <div className={styles.flexCenter}>
            {count <= stock ? <span className={styles.inStock}>En Stock</span> : <span className={styles.sinStock}>Sin Stock</span>}
        </div>

    </article>
  )
}

export default CartItem