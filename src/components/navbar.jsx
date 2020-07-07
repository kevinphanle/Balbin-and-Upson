import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Burger from './burger';
import Sidebar from './sidebar';


function Navbar(props) {
  const [navBackground, setNavBackground] = useState(false)
  const { height, width } = useWindowDimensions();
  const [sidebar, setSidebar] = useState(false);

  let location = useLocation();

  const navRef = useRef();

  const sidebarNode = useRef();
  useOnClickOutside(sidebarNode, () => setSidebar(false));

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

  const handleSidebar = () => {
    console.log("sidebar");
    if (sidebar === false) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  }

  let navbarStyles = {};

  if (location.pathname === "/") {
    if (navBackground) {
      navbarStyles.backgroundColor = 'rgba(29, 99, 65, .9)';
      navbarStyles.textColor = '#F7FFF6';
      navbarStyles.boxShadow = "0 0px 20px 0px rgba(0,0,0,.7)"
      navbarStyles.height = '60px';
    } else {
      navbarStyles.backgroundColor = 'transparent';
      navbarStyles.textColor = '#F7FFF6';
      navbarStyles.border = 'none';
      navbarStyles.height = '100px';
    }
  } else if (location.pathname !== "/") {
    if (navBackground) {
      navbarStyles.backgroundColor = '#fdfdfd';
      navbarStyles.textColor = '#444';
      navbarStyles.border = '1px solid lightgray';
      navbarStyles.height = '60px';
      navbarStyles.boxShadow = "0 0px 10px 0px rgba(0,0,0,.4)"
    } else {
      navbarStyles.backgroundColor = '#fdfdfd';
      navbarStyles.textColor = '#444';
      navbarStyles.height = '60px';
    }
  }


  return (
    <div className="navbar" style={{ backgroundColor: navbarStyles.backgroundColor, borderBottom: navbarStyles.border, height: navbarStyles.height, boxShadow: navbarStyles.boxShadow }} ref={sidebarNode}>
      <div className="logo">
        <NavLink to='/' style={{ color: navbarStyles.textColor }} onClick={() => setSidebar(false)}>
          {
            width <= 405 ? "B&U" : "Balbin & Upson"
          }
        </NavLink>
      </div>


      <div className="right-nav">
        {
          width <= 768 ? <Burger click={handleSidebar} sidebarStatus={sidebar} /> :

            <ul className="nav-links" style={{ color: navbarStyles.textColor }}>
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
                  to="/covid19"
                  className="link"
                  style={{ color: navbarStyles.textColor }}>
                  Covid-19
              </NavLink>
              </li> */}
              <li className="nav-link">

                <NavLink
                  to="/resources"
                  className="link"
                  style={{ color: navbarStyles.textColor }}>
                  Resources
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
              <li className="nav-link">
                <NavLink
                  to="/contact"
                  className="link"
                  style={{ color: navbarStyles.textColor }}
                >
                  Contact
            </NavLink>
              </li>
            </ul>
        }
      </div>

      {
        sidebar ? <Sidebar node={sidebarNode} closeSidebar={handleSidebar} /> : null
      }

    </div>

  )
}


function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler],
  );
};

export default Navbar;