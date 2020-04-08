import React from 'react';

function Resources(props) {

  console.log('resources');
  return (
    <div className="resources">
      Resources
      <div className="links">
          <div className="state-links">
            <p>State</p>
            <ul>
              <li><a href="">Refund Status</a></li>
              <li><a href="">Pay Tax Bill</a></li>
              <li><a href="">Transcripts & Tax Records</a></li>
            </ul>
          </div>

          <div className="federal-links">
            <p>Federal</p>
            <ul>
              <li><a href="">Refund Status</a></li>
              <li><a href="">Pay Tax Bill</a></li>
              <li><a href="">Transcripts & Tax Records</a></li>
            </ul>

          </div>

        </div>
      
    </div>
  )
}

export default Resources;