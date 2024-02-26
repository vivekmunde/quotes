import React from "react";
import Body from "~/components/layout/body";
import CRouteError from "~/components/route-error";

const RouteError: React.FC = () => {
  return (
    <Body className="flex flex-col justify-center">
      <div className="sm:pb-[5vh] md:pb-[15vh] lg:pb-[20vh]">
        <CRouteError />
      </div>
    </Body>
  );
};

export default RouteError;
