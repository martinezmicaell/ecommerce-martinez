import React from 'react'
import { Link } from 'react-router-dom'
//styles
import './ButtonShowMore.scss'

const ButtonShowMore = ({id}) => {
  return (
    <button className='buttonShowMore'><Link className='linkShowMore' to={`/item/${id}`}>Ver más</Link></button>
  )
}

export default ButtonShowMore