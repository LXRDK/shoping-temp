"use client";
import { Product } from "@/typing";
import { ProductCard } from "./ProductCard";

import RatingComponent from "./RatingComponent";

const ProductWithRating = ({ data }: { data: Product[] }) => {
  return (
    <div className=" h-screen w-fit   md:h-screen rounded-xl text-lg gap-3 flex overflow-x-scroll   p-2">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col">
            <ProductCard
              productName={item.productName}
              prodId={item.prodId}
              imageUrl={item.imageUrl}
            />
            <div className="text-white">
              <h1>{item.price} ETB</h1>
              <div className="">
                <RatingComponent initialRating={item.rating} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductWithRating;
