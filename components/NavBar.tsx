import React from "react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <div className="w-full p-4 bg-slate-200 flex justify-between items-center px-5 sticky top-0 left-0 right-0 z-50">
      <Link href="/" className="flex items-center text-xl font-bold">
        <ShoppingCartIcon className="mr-2" />
        MyEcommerce
      </Link>
      <NavMenu />
      <div className="hidden lg:block">
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
