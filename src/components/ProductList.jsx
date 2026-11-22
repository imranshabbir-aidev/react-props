import React from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {   

  return (
    <div>       
       {
            props.data.map(x => 
            
              <ProductCard abc={x} />  

            )
       }

    </div>
  )
}

export default ProductList
