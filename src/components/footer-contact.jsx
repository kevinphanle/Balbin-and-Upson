import React from 'react';
import { Link } from 'react-router-dom';

function FooterContact(props) {
  
  return (
    <div className="footer-contact">
      <div className="wrapper">
        <div className="leftside">
          <h3>why wait to save money?</h3>
          <h2>Contact Us</h2>
        </div>

        <div className="rightside">
          <Link
            to="/contact"
          >Click here</Link>
        </div>
      </div>
    </div>
  )
}

export default FooterContact;