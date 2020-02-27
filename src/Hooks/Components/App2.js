import React from "react";

function longResolve() {
  return new Promise(res => {
    setTimeout(res, 3000);
  });
}

export class App2 extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    longResolve().then(() => {
      alert(this.state.count);
    });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState(state => ({ count: state.count + 1 }));
          }}
        >
          Count: {this.state.count}
        </button>
        <p>
          Refresh, click the button a few times before 3 seconds. The output
          will be whatever the count is at the moment of the console.log
        </p>
      </div>
    );
  }
}
