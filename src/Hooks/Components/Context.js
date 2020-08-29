import React from "react";

const Context = React.createContext();

class Provider extends React.Component {
  state = {
    name: "Snowtooth Mountain",
    status: "OPEN",
  };

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          changeStatus: () =>
            this.setState({
              status: "CLOSED",
            }),
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export class Resort extends React.Component {
  render() {
    return (
      <Provider>
        <div>
          <Lift />
        </div>
      </Provider>
    );
  }
}

const Lift = (props) => (
  <div>
    <Trail />
  </div>
);

const Trail = (props) => (
  <div>
    <Context.Consumer>
      {(context) => (
        <div>
          <p>This is the context: {context.state.name}</p>
          <p>The resort is: {context.state.status}</p>
          <button onClick={context.changeStatus}>Close Resort</button>
        </div>
      )}
    </Context.Consumer>
  </div>
);
