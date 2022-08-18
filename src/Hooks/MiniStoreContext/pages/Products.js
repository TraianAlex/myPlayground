import React, { useContext } from 'react';
import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Products.css';

const ProductsPage = () => {
  const {products, cart, addProductToCart} = useContext(ShopContext);

  return (
    <>
      <MainNavigation
        cartItemNumber={cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="products">
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={() => addProductToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ProductsPage;
