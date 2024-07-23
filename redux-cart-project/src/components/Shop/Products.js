import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { itemId: "p1", price: 6, title: "My First Book", description: "The first book I ever wrote" },
  { itemId: "p2", price: 5, title: "My Second Book", description: "The second book I ever wrote" }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem key={product.itemId}
              itemId={product.itemId}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
