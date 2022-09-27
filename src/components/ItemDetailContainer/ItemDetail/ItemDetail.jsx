import React from 'react'

//styles
import styles from './ItemDetail.module.scss'

const ItemDetail = ({data: {id, title, price, detail, img}}) => {


  return (
    <article key={id} className={styles.section__article}>
        <div className={styles.article__wrapper}>
            <figure className={styles.wrapper__img}>
                <img className={styles.article__img} src={img} alt="" />
            </figure>

            <div className={styles.article__description}>
                <h2 className={styles.article__title}>{title}</h2>
                <p>{detail}</p>
                <p>Su precio: ${price}</p>
            </div>
        </div>
</article>
  )
}

export default ItemDetail