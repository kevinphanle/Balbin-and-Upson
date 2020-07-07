import React from 'react';


function Intro() {

  return (
    <div className="intro">
      <div className="intro-background"></div>

      <div className="intro-group">
        <div className="intro-logo">
          <span className="logo-big-parts">Balbin</span> <span>&</span> <span className="logo-big-parts">Upson</span>
        </div>

        <p>Local tax business located in South San Jose, helping and educating families and local businesses on federal and state taxes.</p>


        <a href="#services" className="scroll">
          <i className="fas fa-long-arrow-alt-down"></i>
        </a>
      </div>

    </div>
  )
}

export default Intro;