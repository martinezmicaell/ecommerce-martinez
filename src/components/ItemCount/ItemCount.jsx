import React,{useState} from 'react'

//styles
import './ItemCount.scss';
//packages
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({price, stock, initial, onAddToCart}) => {
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

    const notify = () => toast.success("Wow so easy!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })

    if(stock === 0) {
        const buttons = [...document.getElementsByTagName('button')];
        console.log(buttons)
        buttons.forEach(button => button.disabled = true)
    }

    return (
        <div className='count__wrapper'>

            <div className='count__container'>
                <button className='count__substract' onClick={handleSubstract}>-</button>
                <span className='count__cantity'>{count}</span>
                <button className='count__add' onClick={handleAdd}>+</button>
            </div>

            <span className='count__stockAvailable'>{`(${stock} unidades disponibles)`}</span>
            <span className='count__price'>El precio por {count} {(count === 1) ? 'unidad' : 'unidades'} es de: {(price * count).toLocaleString('es-AR', {style: 'currency', currency: 'ARS'})}</span>


            <div>
                <button className='button__addToCart' onClick={() => onAddToCart(count)}>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount