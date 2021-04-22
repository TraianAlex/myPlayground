import React from 'react';

const Counter = ({ count, onIncrementClick }) => (
  <button onClick={onIncrementClick}>{count}</button>
);

const CountDisplay = ({ count }) => (
  <div>The current counter count is {count}</div>
);

const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(c => c + 1);

  return (
    <div>
      <CountDisplay count={count} />
      <Counter count={count} onIncrementClick={increment} />
    </div>
  );
};

export default App;
