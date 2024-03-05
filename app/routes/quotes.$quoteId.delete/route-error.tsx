import React from "react";
import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Layout.Screen.Body>
      <CommonRouteError />
    </Layout.Screen.Body>
  );
};

export default RouteError;
