import React from 'react';
import cards from './servicecardObjects';


function ServiceCard(props) {

  const change = (i) => {
    props.callback(i);
  }

  let styles = {
    background: ''
  }

  

  let cardstack = () => {
    return (
      cards.map((card, i) => {
        return (
          <li
            className="card"
            key={i}
            onMouseOver={() => change(i)}
            style={{border: "5px solid" + card.color }}
          >
            <i
              className={'far fa-' + card.icon}
              style={{color: card.color}}
            ></i>
            <h3 style={{color: card.color}}>{card.title}</h3>
            
          </li>
        )
      })
    )
  }
  
  return (
    <ul className="service-cards">
      {
        cardstack()
      }
    </ul>
  )
}


export default ServiceCard;