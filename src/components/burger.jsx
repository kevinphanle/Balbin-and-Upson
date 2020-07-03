import React from 'react';
import { useLocation } from 'react-router-dom';

const Burger = (props) => {
  console.log(props.sidebarStatus)
  let location = useLocation();

  let sidebarStyles = {};
  console.log(location);

  

  if (props.sidebarStatus === true) {
    sidebarStyles.background = "#1d6341";
    sidebarStyles.transformTop = "rotate(45deg)";
    sidebarStyles.transformMid = "translateX(20px)";
    sidebarStyles.transformBottom = "rotate(-45deg)";
    sidebarStyles.opacity = "0";
  } else {
    if (location.pathname !== "/") {
      sidebarStyles.background = "#444";
    } else {
      sidebarStyles.background = "white";
    }
    sidebarStyles.transformTop = "rotate(0)";
    sidebarStyles.transformMid = "translateX(0)";
    sidebarStyles.transformBottom = "rotate(0)";
    sidebarStyles.opacity = "1";
  }
  return (
    <div className="burger" onClick={props.click} >
      <div style={{background: sidebarStyles.background, transform: sidebarStyles.transformTop}}></div>
      <div style={{background: sidebarStyles.background, transform: sidebarStyles.transformMid, opacity: sidebarStyles.opacity}}></div>
      <div style={{background: sidebarStyles.background, transform: sidebarStyles.transformBottom}}></div>
    </div>
  )
}

export default Burger;