import React from 'react';
import { movies } from '../data';

function Movies() {
  return (
    <div className="movies-page">
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index} className="movie">
          <h3>{movie.title}</h3>
          <p>Time: {movie.time}</p>
          <ul>{movie.genres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
