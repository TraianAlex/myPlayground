import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App


/*
class Counter extends React.Component {
  state = {count: 0}
  
  increment = () => this.setState(({count}) => ({count: count + 1}))

  render() {
    return <button onClick={this.increment}>{this.state.count}</button>
  }
}
*/
