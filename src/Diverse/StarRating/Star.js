import React from 'react';
import './Star.css';

export const Star = ({ selected, onClick }) =>
    <div className={ (selected) ? "star selected" : "star" } 
      onClick={onClick}
    >
      { (selected) ? <span>&#9733;</span> : <span>&#9734;</span> }
    </div>
