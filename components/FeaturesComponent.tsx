import ImageComponent from "@/components/ImageComponent";
import { Button } from "@/components/ui/button";
import { Product } from "@/typing";
// FeaturedPage component for displaying product details

const FeaturedComponent = ({ product }: { product: Product }) => {
  return (
    <div className="bg-background h-full flex flex-col md:flex-row drop-shadow-2xl shadow-lg w-full overflow-hidden gap-2 m-2">
      <div className="bg-primary/20 md:rounded-xl w-full md:w-1/2 md:p-5 overflow-hidden relative">
        <ImageComponent productUrl={product.imageUrl} />
      </div>
      <div className="bg-accent p-5 flex flex-col justify-between rounded-xl">
        <div>
          <h2 className="text-3xl font-bold text-white">
            {product.productName}
          </h2>
          <p className="text-lg text-white mt-2">{product.description}</p>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-white">Rating:</span>
            <span className="text-yellow-400">{product.rating} ★</span>
          </div>
          <p className="text-xl font-semibold mt-4">
            Price: <span className="text-green-400">{product.price}</span>
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
            <div>
              <h3 className="text-lg text-white">Available Sizes</h3>
              <ul className="list-disc pl-5 text-white mt-2">
                {product.available_sizes.map((size, index) => (
                  <li key={index}>{size}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg text-white">Available Colors</h3>
              <ul className="list-disc pl-5 text-white mt-2">
                {product.available_colors.map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-white mt-4">
            Stock: <span className="font-bold">{product.stock}</span> items
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <Button variant="default">Add to Cart</Button>
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center bg-blue-400 rounded-xl">
        Post your ad here
      </div>
    </div>
  );
};
export default FeaturedComponent;
