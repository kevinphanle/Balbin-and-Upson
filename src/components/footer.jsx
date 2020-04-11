import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) { 
  return(
    <div className="footer">
      <div className="wrapper">

        <div className="info">
          <Link
            to='/'
          >Balbin&Upson</Link>
          <Link
            to='/resources'
          >Free Resources</Link>
          
        </div>
      </div>
    </div>
  )
}

export default Footer;