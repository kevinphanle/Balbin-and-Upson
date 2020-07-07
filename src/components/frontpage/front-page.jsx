import React from 'react';

import Intro from './intro';
import Services from './servicecards/services';
import About from '../aboutus/about';

function FrontPage() {

  return (
    <div className="wrapper">
      <Intro />
      <Services />
      {/* <Team /> */}
      <About/>
    </div>
  )
}

export default FrontPage;