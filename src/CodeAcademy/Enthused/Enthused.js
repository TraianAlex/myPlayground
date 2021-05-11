import React, { useEffect } from 'react';

export const Enthused = ({ addText, toggle }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      addText('!');
    }, 200);
    return () => clearInterval(interval);
  }, [addText]);

  return <button onClick={() => toggle()}>Stop!</button>;
};
