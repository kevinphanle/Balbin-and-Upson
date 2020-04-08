import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  // const { navbarStyles } = props
  
  const [navBackground, setNavBackground] = useState(false)

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

  if (navBackground) {
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
          <Link to='/' style={{color: navbarStyles.textColor }}>Balbin & Upson</Link>
        </div>

        <div className="right-nav">
          <ul className="nav-links" style={{color: navbarStyles.textColor}}>
            <li className="nav-link">
              <Link
                to="/"
                className="link"
                style={{ color: navbarStyles.textColor }}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="/"
                className="link"
                style={{ color: navbarStyles.textColor }}
              >
                Services
              </Link>
            </li>
            {/* <li className="nav-link">
              <a href="/" className="link" style={{color: navbarStyles.textColor}}>Testimonials</a>
            </li> */}
            <li className="nav-link">
            
              <Link
                to="/resources"
                className="link"
                style={{ color: navbarStyles.textColor }}>
                  Free Resources
              </Link>
            </li>
            <li className="nav-link">
              <a href="/" className="link" style={{color: navbarStyles.textColor}}>About Us</a>
            </li>
          </ul>
        </div>

      </div>

  )
}

export default Navbar;