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
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSingleItem(id)
            .then((response) => {
                setData(response)
            })
            .catch((errMsg) => setError(errMsg.message))
            .finally( () => setIsLoading(false))
            //el finally se ejecuta si o si, no importa que entre en el then o catch, por eso el loading se sale si hay error o carga items
    }, [id])

    return (
        <>
            {isLoading ? <Spinner /> : <ItemDetail data={data} />}
        </>
    )
}

export default ItemDetailContainer