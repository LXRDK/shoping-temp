import { auth } from "@clerk/nextjs/server";
import React from "react";

const Dashboard = async () => {
  await auth.protect();

  return <div>Dashboard</div>;
};

export default Dashboard;
