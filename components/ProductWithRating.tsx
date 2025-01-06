"use client";
import { Product } from "@/typing";
import { ProductCard } from "./ProductCard";
import RatingComponent from "./RatingComponent";

const ProductWithRating = ({ data }: { data: Product[] }) => {
  return (
    <div className="w-full rounded-xl text-lg gap-4 flex overflow-x-auto scroll-smooth p-4 bg-background">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 min-w-[200px] max-w-[250px] flex-shrink-0"
        >
          <ProductCard
            productName={item.productName}
            prodId={item.prodId}
            imageUrl={item.imageUrl}
          />
          <div className="p-4 flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-foreground">
              {item.price} ETB
            </h1>
            <div className="flex items-center gap-2">
              <RatingComponent initialRating={item.rating} />
              <span className="text-sm text-muted-foreground">
                ({item.rating} stars)
              </span>
            </div>
            <button className="mt-2 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductWithRating;
