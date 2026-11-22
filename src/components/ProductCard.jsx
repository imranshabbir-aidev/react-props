import React from 'react'

function ProductCard(props) {
  return (
    <div>        
        <h3 className="bg-warning">{props.abc.name}</h3>
        <p>{props.abc.price}</p>
        <p>{props.abc.color}</p>
        <hr />
       
    </div>
  )
}

export default ProductCard
