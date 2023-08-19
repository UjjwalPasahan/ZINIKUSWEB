import React from 'react'
import prodata from '../data/productdata.json'
import Cards from './Cards'
import Footer from './Footer'
import Header from './Header';

const Products = () => {
  return (
    <div style={{background:'#251b58'}} >
    <Header/>
      <div className="gradC1"></div>
            <div className="gradE1"></div>
            <div className='productdiv'>

        {/* {
            prodata.map((element) => {
                return( */}
                    <Cards
                    // key={element.key}
                    // image={element.image}
                    // name={element.name}
                    // description={element.description}
                    // price={element.price}
                />
            </div>
        <div className="gradC1"></div>
            <div className="gradE1" style={{height:'400px'}}></div>
        <Footer />
    </div>
  )
}

export default Products