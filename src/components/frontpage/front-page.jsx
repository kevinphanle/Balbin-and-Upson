import React from 'react';

import Intro from './intro';
import Services from './services';
import Team from './team';

function FrontPage() {

  return (
    <div className="wrapper">
      <Intro />
      <Services />
      <Team />
    </div>
  )
}

export default FrontPage;