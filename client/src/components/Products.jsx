import React from 'react'
import prodata from '../data/productdata.json'
import Cards from './Cards'
const Products = () => {
  return (
    <div>
        {
            prodata.map((element) => {
                return(
                    <Cards
                    key={element.key}
                    image={element.image}
                    name={element.name}
                    description={element.description}
                    price={element.price}
                />)
            })
        }
    </div>
  )
}

export default Products