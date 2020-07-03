import React from 'react';

const Burger = (props) => {
  console.log(props.sidebarStatus)

  let sidebarStyles = {};

  if (props.sidebarStatus === true) {
    sidebarStyles.background = "#444";
    sidebarStyles.transformTop = "rotate(45deg)";
    sidebarStyles.transformMid = "translateX(20px)";
    sidebarStyles.transformBottom = "rotate(-45deg)";
    sidebarStyles.opacity = "0";
  } else {
    sidebarStyles.background = "white";
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