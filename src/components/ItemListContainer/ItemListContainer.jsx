import React from 'react'

import './ItemListContainer.scss'

const ItemListContainer = ({greetings}) => {
  return (
    <main className='main'>
        <h1>{greetings}</h1>

        <section className='section__container'>
            <article className='section__article'>
                <figure>
                    <img src="https://instagram.fgnr1-1.fna.fbcdn.net/v/t51.2885-15/272220437_798245367686113_7420586762146501181_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fgnr1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ImQ9LIY19KYAX9KLpVR&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjc1Njk3Mjk2MzUzMTkzNjkyMQ%3D%3D.2-ccb7-5&oh=00_AT8CZNjmaKjzUXJ7reYyatJg4YjK8iSOraSXF4GrcknQww&oe=6325C40B&_nc_sid=30a2ef" alt="" />
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