import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

export default function Nav() {
  // eslint-disable-next-line
  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h3>Traian Alex</h3>
      <p>List of Movies: {movies.length}</p>
    </div>
  );
}
