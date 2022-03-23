import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import ProductCard from '../../components/Product';

const Product = () => {
  const router = useRouter();
  const { id } = router.query;
  const [fetchedProduct, setFetchedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      if (id) {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const product = await response.json();
        setFetchedProduct(product);
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  if (!fetchedProduct) {
    return (
      <div className="p-4 text-center text-white bg-red-500">
        Product ID is invalid
      </div>
    );
  }

  return (
    <div className="container">
      <ProductCard product={fetchedProduct} />
    </div>
  );
};

export default Product;
