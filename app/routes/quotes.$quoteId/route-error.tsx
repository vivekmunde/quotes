import React from "react";
import Page from "~/components/layout/page";
import CRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Page.Body className="flex flex-col justify-center">
      <div className="sm:pb-[5vh] md:pb-[15vh] lg:pb-[20vh]">
        <CRouteError />
      </div>
    </Page.Body>
  );
};

export default RouteError;
