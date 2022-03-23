import { useRouter } from 'next/router';
import DescriptionField from '../Product/DescriptionField';

const { default: Image } = require('next/image');

const Product = ({ product, showLink = false }) => {
  const router = useRouter();

  return (
    <div className="product-card border border-slate-100 p-3 shadow">
      <div className="w-full h-[100px] flex justify-center">
        <img src={product.image} className="h-full" />
      </div>
      <h1 className="truncate mt-10 font-bold">{product.title}</h1>
      <DescriptionField description={product.description} />
      {showLink && (
        <button
          className="p-2 text-sm text-white bg-green-500 rounded"
          onClick={() => router.push(`products/${product.id}`)}
        >
          View Details
        </button>
      )}
    </div>
  );
};

export default Product;
