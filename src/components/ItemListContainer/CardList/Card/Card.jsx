import React from 'react';

//components
import ButtonShowMore from '../../../ButtonShowMore/ButtonShowMore';

//styles
import './Card.scss'

const Card = (props) => {
    const {id, price, title, img, detail} = props
    return (
        <article key={id} className='section__article'>
            <div className='article__wrapper'>
                <figure>
                    <img className="article__img" src={img} alt={detail} />
                </figure>

                <div className="article__description">
                    <h2 className='article__title'>{title.length > 20 ? `${title.substring(0,20)}...` : title}</h2>
                    {/* <p>{detail}</p> */}
                    <p className='article__price'>{price.toLocaleString('es-AR', {style: "currency", currency: "ARS"})}</p>
                </div>

                <ButtonShowMore id={id}></ButtonShowMore>
            </div>
        </article>
  )
}

export default Card