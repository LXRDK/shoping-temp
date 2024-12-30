"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import * as React from "react";
interface ProductCardProps {
  prodId: string;
  imageUrl: string;
  productName: string;
}
export function ProductCard({
  prodId,
  imageUrl,
  productName,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${prodId}`}
      className="group w-[175px] h-[175px] bg-primary-foreground rounded-md overflow-hidden flex relative border-2 "
    >
      <img
        className="object-cover w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105"
        src={imageUrl}
        alt="product image"
      />
      <div className="rounded-md absolute bottom-0 h-full w-full z-50 bg-gradient-to-b from-transparent to-secondary-foreground text-white opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out cursor-pointer">
        <p className="bottom-0 absolute pl-1">{productName}</p>
      </div>
    </Link>
  );
}
