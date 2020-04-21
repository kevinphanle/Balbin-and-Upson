import React, {useRef, useState, useEffect} from 'react';
import cards from './servicecardObjects';
import Card from './card';


function ServiceCard(props) {

  // const [hoverRef, isHovered] = useHover();
  const [numfromcard, setnumfromcard] = useState(0);


  const change = (i) => {
    props.callback(i);
  }

  // console.log(numfromcard);

  let cardstack = (arr) => {
    return (
      arr.map((card, i) => {
        change(numfromcard)
        return (
          <Card card={card} num={i} callback={setnumfromcard.bind(this)}/>
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