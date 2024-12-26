/* eslint-disable @next/next/no-img-element */
import React from "react";
import { SignUp } from "@clerk/nextjs";

import { alexFont } from "@/app/fonts/fonts";
const Signup = () => {
  return (
    <div className={`flex min-h-screen w-full bg-accent-foreground `}>
      <div className="w-[40%] border-r-2 border-r-primary hidden md:flex flex-col items-center justify-center gap-2 bg-accent">
        <h1
          className={`${alexFont.className} text-3xl text-accent-foreground font-bold animate-bounce`}
        >
          Signup and get to shopping right away!!
        </h1>
        <img
          className="object-cover rounded-md w-2/4  animate-in fade-in zoom-in duration-1000"
          src="https://images.unsplash.com/photo-1695653422699-de49031f060e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D"
          alt="signup"
        />
      </div>
      <div className="flex items-center justify-center w-full md:w-[60%] ">
        <SignUp appearance={{ elements: {} }} forceRedirectUrl={"/dashboard"} />
      </div>
    </div>
  );
};

export default Signup;
