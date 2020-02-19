import React, { useState } from 'react';

import Navbar from './navbar'

function Portfolio() {

  return (
    <div className="wrapper">
      <Navbar />
      
      <div className="main">
        <div className="intro">
          <div className="intro-background"></div>

          <div className="intro-group">
            <div className="intro-logo">
              <span className="logo-big-parts">Balbin</span> <span>&</span> <span className="logo-big-parts">Upson</span>
            </div>
            <p>Local Tax Business located in South San Jose, helping and educating families and local businesses on federal and state taxes.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio;