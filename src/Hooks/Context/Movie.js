import React from 'react';

export default function Movie({ name, price }) {

  return (
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
  )
}

