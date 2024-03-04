import React from "react";
import Layout from "~/components/layout";
import CRouteError from "~/components/route-error/default-route-error";

const RouteError: React.FC = () => {
  return (
    <Layout.Screen>
      <Layout.Screen.Body>
        <CRouteError />
      </Layout.Screen.Body>
    </Layout.Screen>
  );
};

export default RouteError;
