// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { createStore } from './store';

const Provider = props => {
  const [state, setState] = useState();

  useEffect(() => {
    props.store.subscribe(() => setState(props.store.getState()));
  });

  return React.cloneElement(props.children, state);
};

const store = createStore();

export const connect = (select = () => {}) => {
  return Component => props => (
    <Provider store={store}>
      <Component
        {...select(store.getState(), props)}
        dispatch={store.dispatch}
      />
    </Provider>
  );
};

/**************************************************************
 import React, { Component } from "react";
import createStore from "./store";

export default class Provider extends Component {
  componentDidMount() {
    this.props.store.subscribe(() =>
      this.setState(this.props.store.getState())
    );
  }

  render() {
    return React.cloneElement(this.props.children, this.state);
  }
}

const store = createStore();

export function connect(select = () => {}) {
  return (Component) => (props) => (
    <Provider store={store}>
      <Component
        {...select(store.getState(), props)}
        dispatch={store.dispatch}
      />
    </Provider>
  );
} 
*/
