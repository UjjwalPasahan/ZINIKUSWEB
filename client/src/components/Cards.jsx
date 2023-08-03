import React from 'react';
import '../data/productdata.json'
import '../styles/cards.css'

const Card = (props) => {
  return (
    <div className='flexed'>

    <article className="card">
      <img
        className="card__background"
        src={props.image}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width="1920"
        height="2193"
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title">{props.name}</h2>
          <p className="card__description">
           {props.description}
          </p>
        </div>
        <button className="card__button new_button ">{props.price}</button>
        <button className="card__button"><a href='/productDetail'>Read more</a></button>
      </div>
    </article>
    </div>
  );
};

export default Card;
