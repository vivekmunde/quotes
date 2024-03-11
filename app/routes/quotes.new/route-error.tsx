import React from "react";
import Layout from "~/components/layout";
import CRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Layout.AdminScreen.Body>
      <CRouteError />
    </Layout.AdminScreen.Body>
  );
};

export default RouteError;
