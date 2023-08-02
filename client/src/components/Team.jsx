import React from 'react';
import '../data/teamdata.json';
import '../styles/team.css';
const Team = props => {
  return (
    <div className="wrapper">
      <div className="teams">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="teamimg" src={props.image} alt={props.name} />
              <h2 className="teamh2">{props.name}</h2>
              <h3 className="teamh3">{props.working_area}</h3>
              <p className="teamp">{props.description}</p>
            </div>
            <div className="carousel-item">
              <img className="teamimg" src={props.image} alt={props.name} />
              <h2 className="teamh2">{props.name}</h2>
              <h3 className="teamh3">{props.working_area}</h3>
              <p className="teamp">{props.description}</p>
            </div>
            <div className="carousel-item">
              <img className="teamimg" src={props.image} alt={props.name} />
              <h2 className="teamh2">{props.name}</h2>
              <h3 className="teamh3">{props.working_area}</h3>
              <p className="teamp">{props.description}</p>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Team;
