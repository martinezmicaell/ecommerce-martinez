import { useState, useEffect } from 'react'

//mock API
import { getSingleItem } from '../../services/mockAPI'

//components
import ItemDetail from './ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSingleItem().then((response) => {
            setData(response)
            setIsLoading(false)
        })
    }, [data])
    return (

        <>

            {isLoading ? <p style={{textAlign: "center", marginTop: 15}}>Cargando...</p> : <ItemDetail data={data} />}
        </>
    )
}

export default ItemDetailContainer