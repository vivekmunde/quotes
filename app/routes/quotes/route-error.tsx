import React from "react";
import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";
import Header from "./components/header";

const RouteError: React.FC = () => {
  return (
    <Layout.Screen>
      <Header />
      <Layout.Screen.Body>
        <CommonRouteError />
      </Layout.Screen.Body>
    </Layout.Screen>
  );
};

export default RouteError;
