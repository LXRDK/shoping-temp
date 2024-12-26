import { UserButton } from "@clerk/nextjs";
import React from "react";
import { NavMenu } from "./NavMenu";

const NavBar = () => {
  return (
    <div className="w-full p-4 bg-slate-200 flex justify-between items-center px-5">
      <div>Logo</div>
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
