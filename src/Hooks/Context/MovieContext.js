import React, { useState, createContext } from 'react';

export const MovieContext = createContext({});

export function MovieProvider(props) {
  const [movies, setMovies] = useState([
    {
      name: 'Herry Potter',
      price: '$10',
      id: 23124,
    },
    {
      name: 'Game of Thornes',
      price: '$10',
      id: 2312445,
    },
    {
      name: 'Inception',
      price: '$10',
      id: 2312422,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}
