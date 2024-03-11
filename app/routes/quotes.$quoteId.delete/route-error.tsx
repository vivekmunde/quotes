import React from "react";
import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Layout.AdminScreen.Body>
      <CommonRouteError />
    </Layout.AdminScreen.Body>
  );
};

export default RouteError;
