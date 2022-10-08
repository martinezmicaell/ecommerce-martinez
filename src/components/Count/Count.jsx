import React, {useState, useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import styles from './Count.module.scss'

const Count = ({count, setCount, stock, item}) => {

    const {substractCartItem, addCartItem} = useContext(CartContext);

    const handleSubstract = () => {
        if(count > 1) {
            substractCartItem(item, count - 1)
            setCount(count - 1);
        }
    }

    const handleAdd = () => {
        if(count < stock) {
            addCartItem(item, count + 1)
            setCount(count + 1)
        }
    }
  return (
    <>
        <div className={styles.count__container}>
            <button className={styles.count__substract} onClick={handleSubstract}>-</button>
            <span className={styles.count__qantity}>{count}</span>
            <button className={styles.count__add} onClick={handleAdd}>+</button>
        </div>
    </>
  )
}

export default Count