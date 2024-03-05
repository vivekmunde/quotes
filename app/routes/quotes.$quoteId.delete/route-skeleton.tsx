import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/quote-form";

const RouteSkeleton: React.FC = () => (
  <Layout.Screen.Body>
    <section>
      <Layout>
        <Layout.Header>
          <header>
            <Layout.Header.Title>Update quote</Layout.Header.Title>
          </header>
        </Layout.Header>
        <Layout.Body>
          <Skeleton />
        </Layout.Body>
      </Layout>
    </section>
  </Layout.Screen.Body>
);

export default RouteSkeleton;
