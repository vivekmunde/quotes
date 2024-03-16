import React from "react";
import CommonRouteError from "~/components/route-error";
import layoutStyles from "~/styles/layout";

const RouteError: React.FC = () => {
  return (
    <div className={layoutStyles.container.wrapper}>
      <div className={layoutStyles.container.content}>
        <div className={layoutStyles.body.base}>
          <CommonRouteError />
        </div>
      </div>
    </div>
  );
};

export default RouteError;
