// @ts-nocheck
import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const getRandomId = () => `${Math.random()}-${Math.random()}`;

export default function AddMovie() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = ({ target }) => {
    setName(target.value);
  };

  const updatePrice = ({ target }) => {
    setPrice(target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price, id: getRandomId }]);
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
}
