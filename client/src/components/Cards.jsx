import React from 'react';
import '../data/productdata.json'
import '../styles/cards.css'
import { Link } from 'react-router-dom';
import zini1 from '../assets/homepage/ZINI1.jpg'
import zoro1 from '../assets/homepage/ZORO3.jpg'

const Card = (props) => {
  return (
    <div className='flexed'>

    <article className="card">
      <img
        className="card__background"
        src={zini1}
        alt=""
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">ZINI</h2>
          <p className="card__description">
          The Reception Robot - ZINI
          </p>
        </div>
        
        <button className="card__button"><Link to={'/zini'} style={{marginTop:'-500px'}}>Read more</Link></button>
      </div>
    </article>

    
    <article className="card">
      <img
        className="card__background"
        src={zoro1}
        alt=""
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">ZINI</h2>
          <p className="card__description">
          The Reception Robot - ZINI
          </p>
        </div>
        <button className="card__button"><Link to={'/zini'}>Read more</Link></button>
      </div>
    </article>
    </div>
  );
};

export default Card;
