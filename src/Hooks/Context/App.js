import React, { Component } from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

export default class App extends Component {
  render() {
    return (
      <MovieProvider>
        <div className="container">
          <Nav />
          <AddMovie />
          <MovieList />
        </div>
      </MovieProvider>
    );
  }
}
