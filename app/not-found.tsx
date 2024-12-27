"use client";
import React from "react";
import { Wand2Icon } from "lucide-react";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="bg-blue-800 w-full min-h-screen flex flex-col items-center justify-center gap-2 text-white">
      <Wand2Icon size={50} className="animate-bounce ease-in-out" />
      <h1 className="text-3xl font-bold">Something Went Wrong!! </h1>
      <h1 className="text-sm text-muted">
        Don&apos;t Panic, You Weren&apos;t Supposed to see this{" "}
      </h1>
      <Link
        href={"/dashboard"}
        className={`text-white font-bold ${buttonVariants({
          variant: "ghost",
        })}`}
      >
        {" "}
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
