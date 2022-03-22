import DescriptionField from '../Product/DescriptionField';

const { default: Image } = require('next/image');

const Product = ({ product }) => {
  return (
    <div className="product-card border border-slate-100 p-3 shadow">
      <div className="w-full h-[100px] flex justify-center">
        <img src={product.image} className="h-full" />
      </div>
      <h1 className="truncate mt-10 font-bold">{product.title}</h1>
      <DescriptionField description={product.description} />
    </div>
  );
};

export default Product;
