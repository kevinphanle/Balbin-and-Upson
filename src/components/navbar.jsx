import React from 'react';

function Navbar() {

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">Balbin & Upson</a>
      </div>

      <div className="right-nav">
        <ul className="nav-links">
          <li className="nav-link">
            <a href="/" className="link">Home</a>
          </li>
          <li className="nav-link">
            <a href="/" className="link">Free Resources</a>
          </li>
          <li className="nav-link">
            <a href="/" className="link">Services</a>
          </li>
          <li className="nav-link">
            <a href="/" className="link">Testimonials</a>
          </li>
          <li className="nav-link">
            <a href="/" className="link">About Us</a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar;