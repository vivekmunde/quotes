import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/quote-form";

const RouteSkeleton: React.FC = () => (
  <Layout.AdminScreen.Body>
    <section>
      <Layout>
        <Layout.Header>
          <header>
            <Layout.Header.Title>Create new quote</Layout.Header.Title>
          </header>
        </Layout.Header>
        <Layout.Body>
          <Skeleton />
        </Layout.Body>
      </Layout>
    </section>
  </Layout.AdminScreen.Body>
);

export default RouteSkeleton;
