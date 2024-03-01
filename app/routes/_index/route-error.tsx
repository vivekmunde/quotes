import React from "react";
import Layout from "~/components/layout";
import CRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Layout.Body>
      <CRouteError />
    </Layout.Body>
  );
};

export default RouteError;
