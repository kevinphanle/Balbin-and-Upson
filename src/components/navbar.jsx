import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar(props) {
  // const { navbarStyles } = props
  
  const [navBackground, setNavBackground] = useState(false)
  let location = useLocation();

  const navRef = useRef()

  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  let navbarStyles = {};

  if (navBackground || location.pathname !== "/") {
    navbarStyles.backgroundColor = 'white';
    navbarStyles.textColor = 'black';
    navbarStyles.border = '1px solid lightgray';
    navbarStyles.height = '60px';
  } else {
    navbarStyles.backgroundColor = 'transparent';
    navbarStyles.textColor = '#F7FFF6';
    navbarStyles.border = 'none';
    navbarStyles.height = '100px';
  }

  return (
      <div className="navbar" style={{backgroundColor: navbarStyles.backgroundColor, borderBottom: navbarStyles.border, height: navbarStyles.height}}>
        <div className="logo">
          <NavLink to='/' style={{color: navbarStyles.textColor }}>Balbin & Upson</NavLink>
        </div>

        <div className="right-nav">
          <ul className="nav-links" style={{color: navbarStyles.textColor}}>
            <li className="nav-link">
              <NavLink
                to="/"
                className="link"
                style={{ color: navbarStyles.textColor }}
              >
                Home
              </NavLink>
            </li>
            {/* <li className="nav-link">
              <NavLink
                to="/"
                className="link"
                style={{ color: navbarStyles.textColor }}
              >
                Services
              </NavLink>
            </li> */}
            {/* <li className="nav-link">
              <a href="/" className="link" style={{color: navbarStyles.textColor}}>Testimonials</a>
            </li> */}
            <li className="nav-link">
            
              <NavLink
                to="/resources"
                className="link"
                style={{ color: navbarStyles.textColor }}>
                  Free Resources
              </NavLink>
            </li>
            <li className="nav-link">
            <NavLink
                to="/about"
                className="link"
                style={{ color: navbarStyles.textColor }}>
                  About Us
              </NavLink>
            </li>
          </ul>
        </div>

      </div>

  )
}

export default Navbar;