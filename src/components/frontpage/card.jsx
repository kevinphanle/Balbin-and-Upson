import React, {useRef, useState, useEffect} from 'react';


function Card(props) {

  const {card} = props;

  const [hoverRef, isHovered] = useHover();

  const change = (i) => {
    props.callback(i);
  }

  let regularStyle = {
    border: "5px solid" + card.color,
    icon: {
      color: card.color,
    },
    text: {
      color: card.color,
    }
  }

  let hoverStyle = {
    border: "5px solid" + card.color,
    background: card.color,
    icon: {
      color: "#fdfdfd",
    },
    text: {
      color: "#fdfdfd"
    }
  }
  
  return (
    <li
      className="card"
      onMouseOver={() => change(props.num)}
      ref={hoverRef}
      style={isHovered ? hoverStyle : regularStyle}
    >
      <i
        className={'far fa-' + card.icon}
        style={isHovered ? hoverStyle.icon : regularStyle.icon}
      ></i>
      <h3 style={isHovered ? hoverStyle.text : regularStyle.text }>{card.title}</h3>
      
    </li>
  )
}


function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);

        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

export default Card;