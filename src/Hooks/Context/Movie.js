import React from 'react';

export default function Movie({ id, name, price }) {
  return (
    <div>
      <h2>{name}</h2>
      <span>[{id}]</span>
      <p>{price}</p>
    </div>
  );
}
