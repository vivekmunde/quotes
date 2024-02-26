import React from "react";
import Page from "~/components/layout/quote";
import CRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Page.Body>
      <CRouteError />
    </Page.Body>
  );
};

export default RouteError;
