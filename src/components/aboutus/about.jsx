import React from 'react';
import bert from '../../images/bert.JPG';

function About(props) {

  console.log(bert);
  return (
    <div className="about">
      <div className="header-img">
        <img src={bert} alt=""/>
      </div>

      <div className="aboutus">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit velit quas libero rem? Maxime, animi aliquam! Nihil culpa, dignissimos fugiat quam esse, tempora ut nemo excepturi dolor ducimus iste suscipit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos ab numquam, deleniti ea omnis, eaque veritatis reiciendis repellendus maxime molestiae sint ut, eligendi cumque quod magni dicta consectetur laborum minima!
           
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In animi reprehenderit laboriosam consectetur maiores repudiandae molestias veritatis tempore dolore aliquam quisquam quibusdam ad pariatur illum tempora provident, quas dignissimos quo?
        </p>
      </div>
    </div>
  )
}

export default About;