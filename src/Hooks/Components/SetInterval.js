import React, { useEffect, useState } from "react";

export class SetInterval extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentWillUnmount(prevProps, prevState) {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

// What we think is the same logic but rewritten as hooks:
export function SetInterval2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [count]);

  return <div>{count}</div>;
}
