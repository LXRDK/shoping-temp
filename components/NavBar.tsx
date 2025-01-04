import { UserButton } from "@clerk/nextjs";
import React from "react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full p-4 bg-slate-200 flex justify-around items-center px-5">
      <Link href="/" className=" md:hidden flex-1  mx-5 flex   ">
        <div className="flex items-center group justify-center bg-white p-2 rounded-md hover:bg-gradient-to-r hover:from-pink-400 hover:font-bold hover:to-purple-600 hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-out">
          <ShoppingCartIcon />
          <h1 className="hidden group-hover:block">Go </h1>
          Home
        </div>
      </Link>
      <div>
        <NavMenu />
      </div>
      <div className="hidden lg:block">
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
