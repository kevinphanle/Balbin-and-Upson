import React from "react";
import bert from "../../images/bert.JPG";

function About(props) {
  return (
    <div className="about-container">
      <div className="about">
        <h2>
          A team of <span>big dreamers</span>
        </h2>
        <div className="header-img">
          <img
            src="https://balbin-upson-dev.s3-us-west-1.amazonaws.com/team%401080.jpg"
            alt="teamphoto"
          />
        </div>

        <div className="aboutus">
          <p>
            <span>Balbin & Upson</span> started with the idea of helping friends and
            neighbors with tax and finance questions.
            <br />
            <br /> Amy Balbin (who passed away in 2011) started as a one-person
            tax wiz helping her husband’s Navy buddies complete their income
            taxes while her husband, Camilo Balbin, and herself were stationed
            in Corpus Christie, Texas. Balbin & Upson is now a brother and
            sister team, consisting of Robert and Leah, that embody the spirit
            of caring and helping others. <br />
            <br /> As her legacy has passed on to Balbin & Upson, our vision has
            stayed the course: <span>we are your local tax family building community
            confidence through quality work and education.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
