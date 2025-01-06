import ProductWithRating from "@/components/ProductWithRating";
import { data } from "@/lib/mockData";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const Dashboard = async () => {
  await auth.protect();

  return (
    <div className="w-full min-h-screen bg-background py-10">
      <div className="bg-card w-full max-w-7xl mx-auto rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-foreground text-center mb-8">
          Featured Items
        </h1>
        <div className="overflow-x-auto scroll-smooth hide-scrollbar">
          <ProductWithRating data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
