import { UserButton } from "@clerk/nextjs";
import React from "react";
import { NavMenu } from "./NavMenu";
import Link from "next/link";
import { ShoppingBasketIcon } from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full p-4 bg-slate-200 flex justify-between items-center px-5">
      <Link href="/">
        <ShoppingBasketIcon
          size={50}
          className="bg-gradient-to-br from-purple-500 to-blue-500 text-transparent inline-block bg-clip-text"
        />
      </Link>
      <div>
        <NavMenu />
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
