import React, { ReactNode } from "react";
export const metadata = { title: "shop", favicon: "/file.svg" };
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { roboto } from "./fonts/fonts";

const RootLayout = ({ children }: { children: ReactNode }) => {
  console.log(roboto.className);
  return (
    <ClerkProvider afterSignOutUrl={"/sign-in"}>
      <html>
        <body className={roboto.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
