import {useState, useEffect} from 'react';
//components
import Card from './Card/Card'

import getItems from '../../services/mockAPI';

//styles
import './ItemListContainer.scss'

const ItemListContainer = ({greetings}) => {
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     getItems()
    //         .then((response) => {
    //             console.log('Trayendo Datos');
    //             setItems(response)
    //         })
    //         .catch(err => console.log(`Hubo un error al cargar los Items :(`))
    // }, [])

  return (
    <main className='main'>
        <h1>{greetings}</h1>

        <section className='section__container'>
            <Card
                price={9000}
                title="Camisa Negra"
                detail="Lorem Ipsum"
                img="https://jbonita.vteximg.com.br/arquivos/ids/214862-1280-1707/A5177802_1.jpg?v=637953168364230000"
                stock={5}
                initial={1}
            />

            <Card
                price={7500}
                title="Vestidito Negro Verano"
                detail="Lorem Ipsum"
                img="https://jbonita.vteximg.com.br/arquivos/ids/212607/A4437802_2.jpg?v=637878746203370000"
                stock={10}
                initial={1}

            />

            <Card
                price={14500}
                title="Saco Beige Primavera"
                detail="Lorem Ipsum"
                img="https://jbonita.vteximg.com.br/arquivos/ids/215510-1280-1707/A7485016_1.jpg?v=637969664279630000"
                stock={3}
                initial={1}
            />

        </section>
    </main>
  )
}

export default ItemListContainer