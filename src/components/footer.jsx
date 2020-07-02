import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FooterContact from './footer-contact';

function Footer(props) { 
  let location = useLocation();

  let extendedFooter;

  if (location.pathname !== "/contact") {
  
    extendedFooter = <FooterContact/>
  }

  return(
    <div className="footer">
      
      {extendedFooter}
      
      <div className="footer-wrapper">

        <div className="info">
          <div className="contact">
            <Link
              to='/'
              className="logo-footer"
            >Balbin & Upson</Link>
            <p>balbin.upson@gmail.com</p>
            <p>408.972.1663</p>

          </div>

          <div className="page-links">
            <Link
              to='/covid19'
            >Covid-19</Link>
            <Link
              to='/resources'
            >Resources</Link>
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