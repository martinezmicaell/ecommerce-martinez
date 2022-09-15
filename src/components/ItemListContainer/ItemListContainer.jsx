import {useState, useEffect} from 'react';
//components
import Card from './Card/Card'

import getItems from '../../services/mockAPI';

//styles
import './ItemListContainer.scss'

const ItemListContainer = ({greetings}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems()
            .then((response) => {
                console.log('Trayendo Datos');
                setItems(response)
            })
            .catch(err => console.log(`Hubo un error al cargar los Items :(`))
    }, [])

  return (
    <main className='main'>
        <h1>{greetings}</h1>

        <section className='section__container'>
            {items.map((item) => {
                return (
                    <Card />
                )
            })}

        </section>
    </main>
  )
}

export default ItemListContainer