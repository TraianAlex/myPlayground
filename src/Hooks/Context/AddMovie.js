import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import { useInput } from './useInput';

const getRandomId = () => `${Math.random()}-${Math.random()}`;

export default function AddMovie() {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: price, bind: bindPrice, reset: resetPrice } = useInput('');
  const [, setMovies] = useContext(MovieContext);

  const addMovie = e => {
    e.preventDefault();
    if (name === '' || price === '') {
      return;
    }
    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: getRandomId() },
    ]);
    resetName();
    resetPrice();
  };

  return (
    <form onSubmit={addMovie}>
      <input type="text" {...bindName} />
      <input type="text" {...bindPrice} />
      <button>Submit</button>
    </form>
  );
}
