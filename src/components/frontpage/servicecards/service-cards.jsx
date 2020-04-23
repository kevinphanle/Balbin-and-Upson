import React, {useState} from 'react';
import cards from './servicecardObjects';
import Card from './card';


function ServiceCard(props) {

  const [numfromcard, setnumfromcard] = useState(0);

  const change = (i) => {
    props.callback(i);
  }

  let cardstack = (arr) => {
    return (
      arr.map((card, i) => {
        change(numfromcard)
        return (
          <Card card={card} num={i} key={i} callback={setnumfromcard.bind(this)}/>
        )
      })
    )
  }
  
  return (
    <ul className="service-cards">
      {
        cardstack(cards)
      }
    </ul>
  )
}



export default ServiceCard;