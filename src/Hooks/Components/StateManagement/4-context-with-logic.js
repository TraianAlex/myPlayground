import React, { createContext, useContext, useState } from 'react';

// src/count/count-context.js
const CountContext = createContext(null);

const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [count, setCount] = context;

  const increment = () => setCount(c => c + 1);

  return {
    count,
    setCount,
    increment,
  };
};

const CountProvider = props => {
  const [count, setCount] = useState(0);

  const value = React.useMemo(() => [count, setCount], [count]);

  return <CountContext.Provider value={value} {...props} />;
};

// export {CountProvider, useCount}

///////////////////////////////////////////////////////////////////////

// src/count/page.js

// import {CountProvider, useCount} from './count-context'

const Counter = () => {
  const { count, increment } = useCount();

  return <button onClick={increment}>{count}</button>;
};

const CountDisplay = () => {
  const { count } = useCount();

  return <div>The current counter count is {count}</div>;
};

const CountPage = () => {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
};

export default CountPage;
