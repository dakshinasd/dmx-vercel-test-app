import Image from 'next/image';
import { useRouter } from 'next/router';
import DescriptionField from '../Product/DescriptionField';

const Product = ({ product, showLink = false }) => {
  const router = useRouter();

  return (
    <div className="product-card border border-slate-100 p-3 shadow">
      <div className="w-full h-[100px] flex justify-center">
        <Image
          className="h-full"
          src={product.image}
          width="100%"
          height="100%"
          blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      <h1 className="truncate mt-10 font-bold">{product.title}</h1>
      <DescriptionField description={product.description} />
      {showLink && (
        <button
          className="p-2 text-sm text-white bg-skin-fill rounded"
          onClick={() => router.push(`products/${product.id}`)}
        >
          View Details
        </button>
      )}
    </div>
  );
};

export default Product;
