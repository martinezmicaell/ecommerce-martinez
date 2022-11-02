import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//components
import CardList from './CardList/CardList';
// import {getItems, getItemsByCategory} from '../../services/mockAPI';
import {getItems, getItemsByCategory} from '../../services/firestore';
import Spinner from '../Spinner/Spinner';

//styles
import './ItemListContainer.scss'

const ItemListContainer = ({greetings}) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true)
        if(categoryId === undefined) {
            getItems()
                .then((response) => {
                    setItems(response)

                })
                .catch(err => console.log(`${err}` ))
                .finally(() => {
                    setIsLoading(false);
                })
        } else {
            getItemsByCategory(categoryId).then(response => {
                setItems(response)
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
        }

    }, [categoryId])

  return (
    <main className='main'>

        <section className='section__container'>
            {isLoading ? <Spinner /> :
                <>
                    {categoryId !== undefined ?
                        <>
                            <h2 className='section__titleCategory'>Nuestro catálogo de {categoryId}</h2>
                            <CardList items={items} />
                        </>
                        :
                        <>
                           {/* <div className='container__logo-marbis'>
                                <div className='logo-marbis' href='/'>
                                    <span className='logo-marbis__subrayado'>MARBIS</span>
                                </div>
                            </div> */}

                            <h1 className='section__titleLogo'>MARBIS</h1>

                            <h1 className='section__titleCategory'>El Catálogo seleccionado exclusivo para vos!</h1>
                            <CardList items={items} />
                        </>
                    }

                </>
            }

        </section>
    </main>
  )
}

export default ItemListContainer