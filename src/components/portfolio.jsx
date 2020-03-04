import React from 'react';

import Navbar from './navbar'
import Intro from './intro'

function Portfolio() {

  return (
    <div className="wrapper">
      <Navbar />
      
      <div className="main">
        <Intro />
      </div>

    </div>
  )
}

export default Portfolio;