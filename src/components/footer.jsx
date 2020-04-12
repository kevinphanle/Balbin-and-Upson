import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) { 
  return(
    <div className="footer">
      <div className="wrapper">

        <div className="info">
          <div className="contact">
            <Link
              to='/'
            >Balbin&Upson</Link>
            <p>balbin.upson@gmail.com</p>
            <p>(408) 972-1663</p>

          </div>

          <div className="page-links">
            <Link
              to='/resources'
            >Free Resources</Link>
            <Link
              to="/about"
            >About Us</Link>
            <Link
              to="/contact"
            >
              Contact
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer;