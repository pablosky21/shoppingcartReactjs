import React from 'react'

export const Product = ({product,onAdd}) => {
  return (
    <div>
        <img className='small' src={product.image} alt=""></img>
        <h3>{product.title}</h3>
        <p><strong>Price:</strong>${product.price}</p>
        <button onClick={() => onAdd(product)} className="btn btn-primary" >Add to cart</button>
    </div>
  )
}
