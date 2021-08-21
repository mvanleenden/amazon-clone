import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

import { Product } from "../models/product";

type Props = {
  product: Product;
};

const MAX_RATING = 5;
const MIN_RATING = 1;

const ProductItem = ({ product }: Props) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  const { category, image, title, description, price } = product;

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        alt={title}
        objectFit="contain"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill("")
          .map((_, index) => (
            <StarIcon key={index} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="/prime-tag.png" alt="prime tag" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default ProductItem;
