import React,{useState} from 'react'

//styles
import './ItemCount.scss'

//packages
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const notify = () => toast.success("Wow so easy!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })


    const handleCart = () => {
        notify();
        console.log('cart 1')
    }

    // const handleCart = () => {
    //     console.log('hello world')
    // }

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

            <div>
                <button className='button__addToCart' onClick={handleCart}>Agregar al carrito</button>

            </div>

        </>
    )
}

export default ItemCount