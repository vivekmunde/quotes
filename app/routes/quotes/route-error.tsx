import React from "react";
import Layout from "~/components/layout";
import CommonRouteError from "~/components/route-error";
import Header from "./components/header";

const RouteError: React.FC = () => {
  return (
    <Layout.AdminScreen>
      <Header />
      <Layout.AdminScreen.Body>
        <CommonRouteError />
      </Layout.AdminScreen.Body>
    </Layout.AdminScreen>
  );
};

export default RouteError;
