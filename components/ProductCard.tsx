/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import * as React from "react";

export function ProductCard() {
  return (
    <Link
      href="/product/item-number"
      className="group w-[175] h-[175] bg-primary-foreground rounded-md overflow-hidden flex relative border-2 "
    >
      <img
        className="object-cover transition-all duration-300 ease-in-out group-hover:scale-105 "
        src="https://images.unsplash.com/photo-1462212210333-335063b676bc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=" product image"
      />
      <div className="rounded-md absolute bottom-0 h-full w-full z-50  bg-gradient-to-b from-transparent to-secondary-foreground text-white opacity-0 group-hover:opacity-100  transition-all duration-500 ease-in-out cursor-pointer">
        <p className="bottom-0 absolute pl-1">Chair</p>
      </div>
    </Link>
  );
}
