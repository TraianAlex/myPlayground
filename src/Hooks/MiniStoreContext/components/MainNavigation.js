import React from 'react';
// import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

const mainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          {/* <NavLink to="/">Products</NavLink> */}
          <a href="/">Products</a>
        </li>
        <li>
          {/* <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink> */}
          <a href="/">Cart ({props.cartItemNumber})</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
