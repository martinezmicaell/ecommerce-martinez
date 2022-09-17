import {useState} from 'react'

//styles
import './ItemCount.scss'
const ItemCount = ({price, stock, initial}) => {
    const [count, setCount] = useState(initial);

    const handleSubstract = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const handleAdd = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }

    if(stock === 0) {
        const buttons = [...document.getElementsByTagName('button')];
        console.log(buttons)
        buttons.forEach(button => button.disabled = true)
    }

    return (
        <>
            <span className='count__price'>${price * count}</span>

            <div className='count__container'>
                <button className='count__substract' onClick={handleSubstract}>-</button>
                <span className='count__cantity'>{count}</span>
                <button className='count__add' onClick={handleAdd}>+</button>
            </div>

            <button className='button__addToCart'>Agregar al carrito</button>
        </>
    )
}

export default ItemCount