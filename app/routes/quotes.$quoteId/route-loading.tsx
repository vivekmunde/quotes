import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/ui/skeleton";

const RouteLoading: React.FC = () => {
  return (
    <Layout.Screen.Body className="flex flex-col justify-center">
      <div className="sm:pb-[5vh] md:pb-[15vh] lg:pb-[20vh]">
        <Skeleton className="h-10 mb-4" />
        <Skeleton className="h-10 mb-6 w-[25vw]" />
        <Skeleton className="h-4 w-[10vw]" />
      </div>
    </Layout.Screen.Body>
  );
};

export default RouteLoading;
