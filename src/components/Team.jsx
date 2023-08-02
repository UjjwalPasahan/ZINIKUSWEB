import React from 'react';
import '../data/teamdata.json';
import '../styles/team.css';
const Team = props => {
  return (
    <div className="wrapper">
      
      <div className="teams">
        <img className="teamimg" src={props.image} />
        <h2 className="teamh2">{props.name}</h2>
        <h3 className="teamh3">{props.working_area}</h3>
        <p className="teamp">{props.description}</p>
      </div>
    </div>
  );
};

export default Team;
