import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./reducer";

const store = createStore(reducer);

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h2>Todo List</h2>
          <App />
        </div>
      </Provider>
    );
  }
}
