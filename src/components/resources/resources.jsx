import React from 'react';
import list from './resouce_list';

function Resources(props) {

  const listLinks = () => {
    return list.map((link, i) => {
      return <tr key={i}>
        <td><a target="_blank" rel="noopener noreferrer" href={link.source}>{link.name}</a></td>
        <td>{link.description}</td>
      </tr>
      
    })
  };

  return (
    <div className="resources">
      <h2>Resources</h2>
      <p>Here are some helpful links:</p>
      <div className="links">
        
        <table>
          <thead>
            <tr>
              <th>Website</th>
              <th>Content</th>
            </tr>
          </thead>

          <tbody>
            {listLinks()}
          </tbody>
        </table>

      </div>
      
    </div>
  )
}

export default Resources;