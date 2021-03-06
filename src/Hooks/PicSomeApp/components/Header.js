import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

function Header() {
  const { cartItems } = useContext(CartContext);
  const cartClassName = cartItems.length
    ? "ri-shopping-cart-fill"
    : "ri-shopping-cart-line";
  return (
    <header className="pic">
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-2x`}></i>
      </Link>
    </header>
  );
}

export default Header;
