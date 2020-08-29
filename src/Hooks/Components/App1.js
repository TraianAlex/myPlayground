import React from "react";

export class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Notice we never see question marks
      width: "???",
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      width: this.myRef.current.offsetWidth,
    });
  }

  render() {
    return (
      <div ref={this.myRef}>
        Initial state is set up to '???' but you see only this:{" "}
        {this.state.width}
      </div>
    );
  }
}

// From the docs:
// You may call setState() immediately in componentDidMount().
// It will trigger an extra rendering, but it will happen
// before the browser updates the screen. This guarantees that
// even though the render() will be called twice in this case,
// the user won’t see the intermediate state.
