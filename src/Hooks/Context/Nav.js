import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

export default function Nav() {
  // eslint-disable-next-line
  const [movies, setMovies] = useContext(MovieContext);
  
  return (
    <div>
      <h3>Traian Alex</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  )
}

