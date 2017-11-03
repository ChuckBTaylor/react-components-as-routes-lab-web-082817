import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsList = actors.map((actor, idx) => {
    return(
      <div key={idx}>
        <h1>Name: {actor.name}</h1>
        <p>Movies:</p>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
