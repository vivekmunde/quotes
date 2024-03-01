import React from "react";
import Layout from "~/components/layout";
import CRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Layout.Screen.Body className="flex flex-col justify-center">
      <div className="mb-[5vh] md:mb-[10vh]">
        <CRouteError />
      </div>
    </Layout.Screen.Body>
  );
};

export default RouteError;
