import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// Object Based Approach
const router = createBrowserRouter([
  { 
    path: "/", 
    element: <RootLayout />, 
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> }
    ] 
  }, 
]);

// Another Router Approach
/* const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions); */

function App() {
  return <RouterProvider router={router} />;
}

export default App;
