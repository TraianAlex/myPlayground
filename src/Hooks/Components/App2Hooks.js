import React, { useEffect, useState } from "react";

function longResolve() {
  return new Promise(res => {
    setTimeout(res, 3000);
  });
}

export function App2Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    longResolve().then(() => {
      alert(count);
    });
  }, [count]);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count: {count}
      </button>
      <p>
        Refresh, click the button a few times before 3 seconds. The output will
        be whatever the count is at the moment of the console.log
      </p>
    </div>
  );
}
