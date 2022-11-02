import React from 'react'

import './CheckoutDetail.scss';

const CheckoutDetail = ({itemSeller}) => {
    const {detail, img, title, price, quantity } = itemSeller
  return (
    <div className='checkoutDetail__wrapper'>
        <h4 className="checkoutDetail__title">{title}</h4>
        <img src={img} alt={detail} width={200} height={250} />
        <p className='checkoutDetail__priceUnit'><span className='checkoutDetail__price'>{price.toLocaleString('es-AR', {style:'currency', currency: 'ARS'})}</span> <span>x{quantity} {quantity === 1 ? 'unidad' : 'unidades'}</span></p>
    </div>
  )
}

export default CheckoutDetail