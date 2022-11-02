import React from 'react'

import './Contacto.scss'

import { SocialIcon } from 'react-social-icons'

const Contacto = () => {
  return (
    <section>
        <h2 className='contacto__title'>Necesitas atención personalizada?</h2>
        <h4 className='contacto__subtitle'>Comunícate con Nosotros!</h4>

        <ul className='contacto__ul'>
            <li className='contacto__list'>
                <SocialIcon url="https://www.instagram.com/martinezmicael/" />
                <SocialIcon url="https://web.whatsapp.com/" />

            </li>
        </ul>
    </section>
  )
}

export default Contacto