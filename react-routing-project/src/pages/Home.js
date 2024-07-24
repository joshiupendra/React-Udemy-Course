import { Link, useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>Go to <Link to="/products">The Products Page</Link></p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}