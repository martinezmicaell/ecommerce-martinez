import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//mock API
import { getSingleItem } from '../../services/mockAPI'

//components
import ItemDetail from './ItemDetail/ItemDetail'
//spinner
import Spinner from '../Spinner/Spinner'



const ItemDetailContainer = () => {
    const { id } = useParams();

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSingleItem(id).then((response) => {
            setData(response)
            setIsLoading(false)
        })
    }, [id])
    return (

        <>

            {isLoading ? <Spinner /> : <ItemDetail data={data} />}
        </>
    )
}

export default ItemDetailContainer