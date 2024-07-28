import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import configureProductStore from './hooks-store/products.-store';

/* const rootReducer = combineReducers({
  shop: productReducer
});

const store = createStore(rootReducer); */

configureProductStore();

const root = createRoot(document.getElementById("root"));
root.render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);
