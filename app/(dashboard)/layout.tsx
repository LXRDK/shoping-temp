import NavBar from "@/components/NavBar";
import { Skeleton } from "@/components/ui/skeleton";
import React, { ReactNode, Suspense } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Suspense fallback={<Skeleton className="w-full h-11"></Skeleton>}>
        <NavBar />
        {children}
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
