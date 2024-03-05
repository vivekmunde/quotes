import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

const FormSkeleton: React.FC = () => (
  <div>
    <Skeleton className="h-24 mb-8" />
    <Skeleton className="h-12 mb-6" />
    <Skeleton className="h-12 w-24 mb-6" />
  </div>
);

export default FormSkeleton;
