import React from 'react'
import prodata from '../data/productdata.json'
import Cards from './Cards'
import Footer from './Footer'
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

        <Footer />
    </div>
  )
}

export default Products