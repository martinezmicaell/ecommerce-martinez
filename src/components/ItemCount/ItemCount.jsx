import React, {useState} from 'react'

const ItemCount = (props) => {
    const {stock, initial} = props;

    const [count, setCount] = useState(initial);
    console.log("stock:", stock)

    const handleAdd = () => {
        if( count < stock) {
        setCount(count + 1)
        }
        //Solo sumar si la cantidad del contador no supera la de stock
    }

    const handleSubstract = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
  return (
    <>
        <div>
            <button onClick={handleAdd}>+</button>
            <span>{count}</span>
            <button onClick={handleSubstract}>-</button>
        </div>

        <button>Agregar al carrito</button>

    </>
  )
}

export default ItemCount