import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>My Home Page</h1>
      <>Go to <Link to="/products">The Products Page</Link></>
    </>
  );
}