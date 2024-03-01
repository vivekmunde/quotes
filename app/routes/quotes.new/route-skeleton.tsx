import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/ui/skeleton";

const RouteSkeleton: React.FC = () => (
  <Layout.Screen.Body>
    <Skeleton className="h-16 mb-6" />
    <Skeleton className="h-8 mb-6" />
    <Skeleton />
  </Layout.Screen.Body>
);

export default RouteSkeleton;
