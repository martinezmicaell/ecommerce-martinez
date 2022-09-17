import React from 'react';

//components
import ItemCount from './ItemCount/ItemCount';

//styles
import './Card.scss'

const Card = (props) => {
    const {id, price, title, img, stock, detail, initial} = props
    return (
        <article key={id} className='section__article'>
            <div className='article__wrapper'>
                <figure>
                    <img className="article__img" src={img} alt="" />
                </figure>

                <div className="article__description">
                    <h2 className='article__title'>{title}</h2>
                    {/* <p>{detail}</p> */}
                </div>

                <ItemCount price={price} stock={stock} initial={initial}/>

            </div>
        </article>
  )
}

export default Card