import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  const {styles} = props

  return (
      <div className="navbar" style={{backgroundColor: styles.backgroundColor, borderBottom: styles.border, height: styles.height}}>
        <div className="logo">
          <Link to='/' style={{color: styles.textColor }}>Balbin & Upson</Link>
        </div>

        <div className="right-nav">
          <ul className="nav-links" style={{color: styles.textColor}}>
            <li className="nav-link">
              <a href="/" className="link" style={{color: styles.textColor}}>Home</a>
            </li>
            <li className="nav-link">
              <Link
                to="/"
                className="link"
                style={{ color: styles.textColor }}
              >
                Services
              </Link>
            </li>
            <li className="nav-link">
              <a href="/" className="link" style={{color: styles.textColor}}>Testimonials</a>
            </li>
            <li className="nav-link">
              <a href="/" className="link" style={{color: styles.textColor}}>Free Resources</a>
            </li>
            <li className="nav-link">
              <a href="/" className="link" style={{color: styles.textColor}}>About Us</a>
            </li>
          </ul>
        </div>

      </div>

  )
}

export default Navbar;