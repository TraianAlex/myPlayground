import React, { useState } from 'react';
// import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ProductsPage from './pages/Products';
import CartPage from './pages/Cart';
import './App.css';

const App = () => {
  const [page, setPage] = useState('products');

  return (
    <GlobalState>
      <nav>
        <ul>
          <li onClick={() => setPage('products')}>Products |</li>
          <li onClick={() => setPage('cart')}>Cart</li>
        </ul>
      </nav>

      {page === 'products' && <ProductsPage />}
      {page === 'cart' && <CartPage />}

      {/* <BrowserRouter>
        <Switch>
          <Redirect from="/home" to="/" />
          <Route path="/" component={ProductsPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </BrowserRouter> */}
    </GlobalState>
  );
};

export default App;
