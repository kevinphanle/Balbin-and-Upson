import React from 'react';
import cards from './servicecardObjects';

function ServiceCard() {

  return (
    <ul className="service-cards">
      {
        cards.map((card, i) => {
          return (
            <li className="card" key={i}>
              <i className={'far fa-' + card.icon}></i>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

export default ServiceCard;