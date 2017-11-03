import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map((director, idx) => {
    return(
      <div key={idx}>
        <h1>Name: {director.name}</h1>
        <p>Movies: </p>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
