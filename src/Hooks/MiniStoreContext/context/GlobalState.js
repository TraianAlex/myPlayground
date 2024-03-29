import React, { useState } from 'react';
import ShopContext from './shop-context';

const GlobalState = props => {
  const [products] = useState([
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 },
  ]);
  const [cart, setCart] = useState([]);

  const addProductToCart = product => {
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id,
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setTimeout(() => {
      setCart(updatedCart);
    }, 700);
  };

  const removeProductFromCart = productId => {
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId,
    );
    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };

    updatedItem.quantity--;
    updatedItem.quantity <= 0
      ? updatedCart.splice(updatedItemIndex, 1)
      : (updatedCart[updatedItemIndex] = updatedItem);

    setTimeout(() => {
      setCart(updatedCart);
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
