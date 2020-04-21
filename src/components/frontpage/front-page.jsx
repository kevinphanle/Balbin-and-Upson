import React from 'react';

import Intro from './intro';
import Services from './servicecards/services';
import Team from './team/team';

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