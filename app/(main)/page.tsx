import React from "react";
import { alexFont } from "../fonts/fonts";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = await auth();
  if (userId) return redirect("/dashboard");
  return (
    <div
      className={` flex flex-col items-center min-h-screen w-full  pl-2 rounded-md bg-slate-200 gap-5 `}
    >
      <div className=" bg-accent-foreground p-3 rounded-md mt-2 ">
        <Link
          href={"/"}
          className={`${alexFont.className}  text-7xl pt-3  text-primary font-extrabold underline drop-shadow-lg drop-shadow-white hover:text-white transition-all duration-300 ease-in-out`}
        >
          {" "}
          Hello Shoppers
        </Link>
      </div>
      <div className="flex items-start justify-around  h-fit rounded-md flex-col md:flex-row w-full gap-5">
        <div className="bg-accent-foreground w-full md:w-[30%] h-60 rounded-md text-lg flex  items-center justify-center p-2">
          <div className="bg-slate-200 w-full h-full rounded-md flex flex-col gap-4 md:flex-row  text-slate-800 items-center md:items-start justify-between p-3 ">
            <div className="bg-accent-foreground shadow-lg rounded-md flex text-center  items-center justify-center md:justify-start pt-3 gap4 text-white flex-col w-4/5 md:w-[45%] h-80 md:h-full gap-4 ">
              <h1 className="whitespace-nowrap text-xs md:text-sm">
                Alrady have an account?{" "}
              </h1>
              <Link
                href="/sign-in"
                className={`${buttonVariants({
                  variant: "default",
                })} no-underline text-slate-900 hover:border-primary hover:border-2 transition-all duration-300 ease-in-out font-bold hover:bg-secondary`}
              >
                Sign-in
              </Link>
              <p className="text-xs hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laboriosam totam blanditiis. Quas vero sint ab, eaque
              </p>
            </div>
            <div className="bg-accent-foreground pb-1 shadow-lg rounded-md text-center flex items-center justify-center md:justify-start pt-3 gap4 text-white flex-col  w-4/5 md:w-[45%] h-full gap-4 text-sm md:text-lg">
              <h1 className="whitespace-nowrap text-xs md:text-sm">
                New to the site?{" "}
              </h1>
              <Link
                href="/sign-up"
                className={`${buttonVariants({
                  variant: "default",
                })} no-underline text-slate-900 hover:border-primary hover:border-2 transition-all duration-300 ease-in-out font-bold hover:bg-secondary`}
              >
                Sign-up
              </Link>
              <p className="text-xs hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique laboriosam totam blanditiis. Quas vero sint ab, eaque
              </p>
            </div>
          </div>
        </div>
        <div className="bg-accent-foreground w-full md:w-[60%] h-60 md:h-screen rounded-md text-lg place-items-center    gap-3   mb-3  grid grid-cols-2 md:grid-cols-4  overflow-scroll p-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <ProductCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
