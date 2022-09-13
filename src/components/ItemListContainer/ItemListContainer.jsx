import React from 'react'
//components
import Card from './Card/Card'

//styles
import './ItemListContainer.scss'

const ItemListContainer = ({greetings}) => {
  return (
    <main className='main'>
        <h1>{greetings}</h1>

        <section className='section__container'>

            <Card />
            <article className='section__article'>
                <figure>
                    <img src="" alt="" />
                </figure>

                <div className="section__description">
                    <h2>Camisa negra</h2>
                    <span>$1500</span>
                    <span>cantidad</span>
                </div>
            </article>

            <article className='section__article'>
                <figure>
                    <img src="" alt="" />
                </figure>

                <div className="section__description">
                    <h2>Camisa negra</h2>
                    <span>$1500</span>
                    <span>cantidad</span>
                </div>
            </article>
        </section>
    </main>
  )
}

export default ItemListContainer