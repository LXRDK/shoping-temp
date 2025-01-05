import ProductWithRating from "@/components/ProductWithRating";
import { data } from "@/lib/mockData";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const Dashboard = async () => {
  await auth.protect();

  return (
    <div className="w-full min-h-screen bg-red-500  ">
      <div className="bg-accent-foreground w-full  lg:w-full rounded-md text-lg flex flex-col items-center justify-center  ">
        <h1 className="text-white p-5 text-3xl font-bold">Featured Items</h1>
        <div className="overflow-x-scroll w-screen max-w-screen-xl rounded-xl ">
          <ProductWithRating data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
