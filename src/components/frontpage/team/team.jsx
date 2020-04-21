import React from 'react';
import team from './team_members';

function Team() {

  return (
    <section className="team">
      <h2>Meet the team</h2>
      <p>Always willing to say "Hi!"!</p>
      <div className="member-list">
        {
          team.map((member,i) => {
            return <div className="team-member" key={i}>
              <div className="photo">
                <img src={member.photo} alt=""/>
              </div>
              <div className="info">
                <h3>{member.name}</h3>
                <p className="member-title">{member.title}</p>
                <p>{member.description}</p>
              </div>
            </div>
          })
        }

      </div>
    </section>
  )
}

export default Team;