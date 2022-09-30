import React from 'react'

//components
import ItemCount from '../../ItemCount/ItemCount';

//styles
import styles from './ItemDetail.module.scss'

const ItemDetail = ({data: {id, title, price, detail, img, stock}}) => {


  return (
    <article key={id} className={styles.section__article}>
        <div className={styles.article__wrapper}>
            <figure className={styles.wrapper__img}>
                <img className={styles.article__img} src={img} alt="" />
            </figure>

                <div className={styles.article__description}>
                    <h2 className={styles.article__title}>{title}</h2>
                    <p className={styles.article__detail}>{detail}</p>

                    <ItemCount price={price} stock={stock} initial={1}/>

                </div>
        </div>
</article>
  )
}

export default ItemDetail