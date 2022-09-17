import React from 'react'

//components
import Card from './Card/Card'

const CardList = ({items}) => {

  return (
    items.map(card => {
        const {id, price, title, detail, stock, img} = card;

        return(
            <Card
            key={id}
            id={id}
            price={price}
            title={title}
            detail={detail}
            stock={stock}
            img={img}
            initial={1}
        />
        )
    })
  )
}

export default CardList