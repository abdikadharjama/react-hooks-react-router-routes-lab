import React from 'react';
import { directors } from '../data';

function Directors() {
  return (
    <div className="directors-page">
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index} className="director">
          <h3>{director.name}</h3>
          <ul>{director.movies.map((movie, index) => <li key={index}>{movie}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
