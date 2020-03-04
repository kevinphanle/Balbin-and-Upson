import React from 'react';

function Intro() {

  return (
    <div className="intro">
      <div className="intro-background"></div>

      <div className="intro-group">
        <div className="intro-logo">
          <span className="logo-big-parts">Balbin</span> <span>&</span> <span className="logo-big-parts">Upson</span>
        </div>

        <p>Local Tax Business located in South San Jose, helping and educating families and local businesses on federal and state taxes.</p>
      </div>

      <a href="/" class="scroll">
        <img src="../images/down.png" alt=""/>
      </a>
    </div>
  )
}

export default Intro;