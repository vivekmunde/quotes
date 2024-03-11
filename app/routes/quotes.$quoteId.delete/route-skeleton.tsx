import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/ui/skeleton";

const RouteSkeleton: React.FC = () => (
  <Layout.AdminScreen.Body>
    <section>
      <Layout>
        <Layout.Header>
          <header>
            <Layout.Header.Title>Delete quote</Layout.Header.Title>
          </header>
        </Layout.Header>
        <Layout.Body>
          <Skeleton className="h-32 mb-6" />
          <Skeleton className="h-6 mb-2" />
          <Skeleton className="h-6 mb-8" />
          <Skeleton className="h-24 mb-6" />
          <Skeleton className="h-12 w-24" />
        </Layout.Body>
      </Layout>
    </section>
  </Layout.AdminScreen.Body>
);

export default RouteSkeleton;
