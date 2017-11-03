import React from 'react';
import { movies } from '../data';
import { Route } from 'react-router-dom';

const Movies = (props) => {
  const moviesList = movies.map((movie, idx) => {
    return(
      <div key={idx}>
        <h2>Name: {movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres: </p>
        <ul className="genre-list">
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
  console.log(moviesList, "should be the list of movies");
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesList}
    </div>
  );
};

export default Movies;
