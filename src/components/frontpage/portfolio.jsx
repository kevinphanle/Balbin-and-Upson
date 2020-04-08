import React from 'react';

import Intro from './intro';
import Services from './services';
import Team from './team';

function Portfolio() {

  return (
    <div className="wrapper">
      <div className="main">
        <Intro />
        <Services />
        <Team />
      </div>
    </div>
  )
}

export default Portfolio;