import React, { useEffect, useContext } from 'react';
import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Cart.css';

const CartPage = () => {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  });

  return (
    <>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={() => context.removeProductFromCart(cartItem.id)}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default CartPage;
