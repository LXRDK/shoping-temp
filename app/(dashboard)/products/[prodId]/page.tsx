import React from "react";
import { data } from "@/lib/mockData";
import FeaturedComponent from "@/components/FeaturesComponent";
import ProductWithRating from "@/components/ProductWithRating";

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
    <div className="min-h-screen bg-slate-50">
      <FeaturedComponent product={product} />
      <div className="overflow-x-auto scroll-smooth">
        <ProductWithRating data={data} />
      </div>
    </div>
  );
};

// Export only the page component as the default
export default ProductPage;
