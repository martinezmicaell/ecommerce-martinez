import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//components
import CardList from './CardList/CardList';
import {getItems, getItemsByCategory} from '../../services/mockAPI';
import Spinner from '../Spinner/Spinner';

//styles
import './ItemListContainer.scss'

const ItemListContainer = ({greetings}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // console.log(useParams())
    const { categoryId } = useParams();
    console.log(categoryId)

    useEffect(() => {
        console.log(categoryId)
        setIsLoading(true)
        if(categoryId === undefined) {
            getItems
                .then((response) => {
                    console.log('Trayendo Datos');
                    setItems(response)
                    console.log(response)

                })
                .catch(err => console.log(`${err}` ))
                .finally(() => {
                    setIsLoading(false);
                    console.log('Request finalized')
                })
        } else {
            getItemsByCategory(categoryId).then(response => {
                setItems(response)
                setIsLoading(false);

            })
        }

    }, [categoryId])

  return (
    <main className='main'>

        <h1 className='main__title'>{greetings}</h1>

        <section className='section__container'>
            {isLoading ? <Spinner /> : <CardList items={items} />}

        </section>
    </main>
  )
}

export default ItemListContainer