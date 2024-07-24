import { useParams, Link } from 'react-router-dom';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId;

  return (
    <>
      <h1>Product Details!</h1>
      <p>{productId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}