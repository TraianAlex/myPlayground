import React, { useState, createContext, useMemo } from 'react';

export const MovieContext = createContext([]);

const initialState = [
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
];

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState(initialState);
  const value = useMemo(() => [movies, setMovies], [movies, setMovies]);

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}
