import { Link } from 'react-router-dom';

const DUMMY_PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
  { id: "p4", title: "Product 4" }
];

export default function ProductsPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>
          );
        })}
      </ul>
    </>
  );
}