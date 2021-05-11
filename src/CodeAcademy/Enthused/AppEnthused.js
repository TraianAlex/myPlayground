import React, { useState } from 'react';
import { Enthused } from './Enthused';

export const AppEnthused = () => {
  const [enthused, setEnthused] = useState(false);
  const [text, setText] = useState('');

  const toggleEnthusiasm = () => setEnthused(!enthused);

  const addText = newText => setText(text + newText);

  const handleChange = e => setText(e.target.value);

  let button;
  if (enthused) {
    button = <Enthused toggle={toggleEnthusiasm} addText={addText} />;
  } else {
    button = <button onClick={toggleEnthusiasm}>Add Enthusiasm!</button>;
  }

  return (
    <div>
      <h1>Auto-Enthusiasm</h1>
      <textarea
        rows={7}
        cols={40}
        value={text}
        onChange={handleChange}
      ></textarea>
      {button}
      <h2>{text}</h2>
    </div>
  );
};
