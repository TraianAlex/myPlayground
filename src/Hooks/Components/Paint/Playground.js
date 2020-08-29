import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import randomColor from "randomcolor";

export default function Playground() {
  const [count, setCount] = useState(30);
  const [color, setColor] = useState(randomColor());

  const inputRef = useRef(); // inputRef === 50

  useEffect(() => {
    // setColor(randomColor())
    inputRef.current.focus();
  }, [count]);

  //const calculate = useCallback(<Calculate />, [count])
  const cb = useCallback((num) => console.log(num), []); // return the function ([count])
  // useMemo(() => console.log('useMemo')) // return the result of the function

  // eslint-disable-next-line
  useCallback(() => console.log("useCallback"));
  // eslint-disable-next-line
  useMemo(() => () => console.log("useMemo")); // equivalent

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      {count}
      <button onClick={() => setCount((currentCount) => currentCount - 1)}>
        -
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        +
      </button>
      <button onClick={() => setColor(randomColor())}>Change Color</button>
      <hr />
      <input
        ref={inputRef}
        type="range"
        onChange={(e) => setCount(e.target.value)}
        value={count}
      />
      {/* {calculate} */}
      <Calculate cb={cb} num={count} />
    </div>
  );
}

const Calculate = React.memo(({ cb, num }) => {
  cb(num);
  const renderCount = useRef(1);
  return <div>{renderCount.current++}</div>;
});

// function Calculate({ cb, num }) {
//   cb(num)
//   const renderCount = useRef(1)
//   return <div>{renderCount.current++}</div>
// }

// https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578

// eslint-disable-next-line
