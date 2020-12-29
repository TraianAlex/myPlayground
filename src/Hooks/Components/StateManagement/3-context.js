import React, { createContext, useContext, useMemo, useState } from "react";

// src/count/count-context.js
const CountContext = createContext(null);

function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  return context;
}

function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = useMemo(() => [count, setCount], [count]);
  return <CountContext.Provider value={value} {...props} />;
}

// export {CountProvider, useCount}

////////////////

// src/count/page.js

// import {CountProvider, useCount} from './count-context'

function Counter() {
  const [count, setCount] = useCount();
  const increment = () => setCount((c) => c + 1);
  return <button onClick={increment}>{count}</button>;
}

function CountDisplay() {
  const [count] = useCount();
  return <div>The current counter count is {count}</div>;
}

function CountPage() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  );
}

export default CountPage;
