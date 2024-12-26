import React from "react";
import { alexFont } from "../fonts/fonts";

const Home = () => {
  return (
    <div
      className={`${alexFont.className} flex flex-col items-center min-h-screen w-full bg-accent-foreground  text-7xl pt-3 pl-2 text-primary font-extrabold underline`}
    >
      Hello Shoppers
    </div>
  );
};

export default Home;
