/* eslint-disable @next/next/no-img-element */
import { Product } from "../models/product";
import ProductItem from "./ProductItem";

type Props = {
  products: Product[];
};

const ProductFeed = ({ products }: Props) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.slice(0, 4).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}

      <img className="md:col-span-full" src="/banner-4.jpg" alt="banner" />

      <div className="md:col-span-2">
        {products.slice(4, 5).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      {products.slice(5).map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductFeed;
