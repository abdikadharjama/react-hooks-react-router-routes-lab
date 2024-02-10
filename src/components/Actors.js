import React from 'react';
import { actors } from '../data';

function Actors() {
  return (
    <div className="actors-page">
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={index} className="actor">
          <h3>{actor.name}</h3>
          <ul>{actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
