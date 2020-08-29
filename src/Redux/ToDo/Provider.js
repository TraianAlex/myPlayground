import React, { Component } from "react"; // , PropTypes
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
