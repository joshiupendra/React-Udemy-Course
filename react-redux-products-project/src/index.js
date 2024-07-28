import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import ProductsProvider from './context/products-context';

/* const rootReducer = combineReducers({
  shop: productReducer
});

const store = createStore(rootReducer); */

const root = createRoot(document.getElementById("root"));
root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>);
