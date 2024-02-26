import React from "react";
import Body from "~/components/layout/body";
import { Skeleton } from "~/components/ui/skeleton";

const RouteLoading: React.FC = () => {
  return (
    <Body className="flex flex-col justify-center">
      <div className="sm:pb-[5vh] md:pb-[15vh] lg:pb-[20vh]">
        <Skeleton className="h-10 mb-4" />
        <Skeleton className="h-10 mb-6 w-[25vw]" />
        <Skeleton className="h-4 w-[10vw]" />
      </div>
    </Body>
  );
};

export default RouteLoading;
