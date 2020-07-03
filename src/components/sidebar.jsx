import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="sidebar" >
      <NavLink to="/" onClick={props.closeSidebar}>
        Home
      </NavLink>
      <NavLink to="/covid19" onClick={props.closeSidebar}>
        Covid-19
      </NavLink>
      <NavLink to="/resources" onClick={props.closeSidebar}>
        Resources
      </NavLink>
      <NavLink to="/about" onClick={props.closeSidebar}>
        About Us
      </NavLink>
      <NavLink to="/contact" onClick={props.closeSidebar}>
        Contact
      </NavLink>
      
    </div>
  )
}

export default Sidebar;