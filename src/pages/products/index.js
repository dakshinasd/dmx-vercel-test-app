import { useState, useEffect } from 'react';
import Product from '../../components/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      const products = await response.json();
      console.log(products);
      setProducts(products);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div className="text-center p-5"> Loading...</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      {products.length ? (
        products.map((product) => <Product product={product} />)
      ) : (
        <div>No Products Available</div>
      )}
    </div>
  );
};

export default Products;
