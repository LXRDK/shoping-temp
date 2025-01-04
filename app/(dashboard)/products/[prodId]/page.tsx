import React from "react";
import { data } from "@/lib/mockData";
import ImageComponent from "@/components/ImageComponent";
// export const dynamic = "force-dynamic";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ prodId: string }>; // Use the correct typing here
}) => {
  const { prodId } = await params; // No need to await

  if (!prodId) {
    return <div>Error: Product ID not found.</div>;
  }

  const productId = parseInt(prodId); // Convert prodId to a number
  if (isNaN(productId) || productId < 1 || productId > data.length) {
    return <div>Error: Invalid product ID.</div>;
  }

  const product = data[productId - 1]; // Fetch product based on prodId
  if (!product) {
    return <div>Error: Product not found.</div>;
  }

  return (
    <div className="bg-background h-full flex flex-col md:flex-row drop-shadow-2xl shadow-lg w-full overflow-clip ">
      <div className="bg-blue-500/20 h-[500px] md:rounded-xl w-full md:w-1/2 md:m-5  overflow-hidden p-2 flex items-center justify-center">
        <ImageComponent productUrl={product.imageUrl} />
      </div>
      <div className="bg-blue-300 h-screen w-full md:w-1/2 p-5">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">
            {product.productName}
          </h2>
          <p className="text-lg text-white">{product.description}</p>
          <div className="flex items-center space-x-2">
            <span className="text-white text-lg">Rating:</span>
            <span className="text-yellow-400 text-lg">{product.rating} ★</span>
          </div>
          <p className="text-xl text-white font-semibold">
            Price: <span className="text-green-400">{product.price}</span>
          </p>
          <div className="flex space-x-4">
            <div>
              <h3 className="text-lg text-white">Available Sizes</h3>
              <ul className="list-disc pl-5 text-white">
                {product.available_sizes.map((size, index) => (
                  <li key={index}>{size}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg text-white">Available Colors</h3>
              <ul className="list-disc pl-5 text-white">
                {product.available_colors.map((color, index) => (
                  <li key={index}>{color}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-white">
              Stock: <span className="font-bold">{product.stock}</span> items
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
