import React from 'react';
import team from './team_members';

function Team() {

  return (
    <section className="team">
      <div className="team-head">
        <h2>Meet the team</h2>
        <p>Always willing to say "Hi!"!</p>

      </div>
      <div className="member-list">
        {
          team.map((member, i) => {
            return <div className="team-member" key={i}>
              <div className="photo">
                <img src={member.photo} alt="" />
              </div>
              <div className="info">
                <h3>{member.name}<span className="name-accent"></span></h3>
                <p className="member-title">{member.title} <span>{member.credits ? "· " + member.credits : null}</span></p>
                <p className="member-desc">{member.description}</p>
              </div>
            </div>
          })
        }

      </div>
    </section>
  )
}

export default Team;