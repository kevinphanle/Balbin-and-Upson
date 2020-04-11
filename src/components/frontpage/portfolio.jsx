import React from 'react';

import Intro from './intro';
import Services from './services';
import Team from './team';

function Portfolio() {

  return (
    <div className="wrapper">
      <Intro />
      <Services />
      <Team />
    </div>
  )
}

export default Portfolio;