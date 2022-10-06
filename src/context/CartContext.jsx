import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext(); //que devuelve createContext()? ver el retorno

const { Provider } = CartContext

//Si no hay nada en el carrito, se renderiza una cosa, si no, se renderiza otra.
const MyProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //metodo some - indica si el producto agregado al carrito ya existe o no.
    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }


    const addItem = (item, quantity) => {
        const newItem = {
            ...item,
            quantity
        }

        //Si esta en carrito, solo agregamos cantidad.
        if(isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].quantity += quantity
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    }

    //Borra todos los productos de nuestro Cart. Se lo asigno a un boton.
    const emptyCart = () => {
        return setCart([])
    }

    //Borrar un producto en especifico del carrito. Ejemplo: La cruz para borrar.
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    //retorna cantidad unidades que tiene nuestro carrito. Differente al length que retorna cantidad de elementos. 0 es el valor inicial de la acumulacion
    const getItemCantity = () => {
        return cart.reduce((acc, x) => acc += x.quantity, 0)
    }

    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.price * x.quantity, 0)
    }

    return <Provider value={{cart, isInCart, addItem, emptyCart, deleteItem, getItemCantity, getItemPrice}}>{children}</Provider>
}

//a value se le pasa un objeto, si no tendriamos que mandar todo de forma manual
export default MyProvider;