import React from 'react';
import cards from './servicecardObjects';


function CardDetail(props) {

  const num = props.data;
  const card = cards[num];
  
  return (
    <div className="cardDetails">
      <p style={{color: card.color}}>{card.description}</p>
    </div>
  )
}

export default CardDetail;