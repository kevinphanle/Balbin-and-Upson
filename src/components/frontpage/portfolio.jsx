import React, { useState, useEffect, useRef } from 'react';

import Navbar from '../navbar';
import Intro from './intro';
import Services from './services';
import Team from './team';

function Portfolio() {
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
    <div className="wrapper">
      <Navbar
        styles={navbarStyles}
      />
      
      <div className="main">
        <Intro />
        <Services />
        <Team />
      </div>

    </div>
  )
}

export default Portfolio;