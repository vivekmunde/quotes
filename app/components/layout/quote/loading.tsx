import React from "react";
import Page from "~/components/layout/quote";
import { Skeleton } from "~/components/ui/skeleton";

const Loading: React.FC = () => {
  return (
    <Page.Body>
      <div className="flex flex-col gap-4 mb-6">
        <Skeleton className="h-12" />
        <Skeleton className="h-12 md:hidden" />
        <Skeleton className="h-12 w-[75%]" />
      </div>
      <Skeleton className="h-4 w-[25%] mb-6" />
    </Page.Body>
  );
};

export default Loading;
