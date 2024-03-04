import React from "react";
import Layout from "~/components/layout";
import CRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Layout.Screen>
      <Layout.Screen.Header />
      <Layout.Screen.Body>
        <CRouteError />
      </Layout.Screen.Body>
    </Layout.Screen>
  );
};

export default RouteError;
