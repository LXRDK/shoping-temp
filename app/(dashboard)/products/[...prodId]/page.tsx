"use client";
import React from "react";
import { useParams } from "next/navigation";
const ProductPage = () => {
  const params = useParams();

  return <div>{params.prodId}</div>;
};

export default ProductPage;
