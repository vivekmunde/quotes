import React from "react";
import CRouteError from "~/components/route-error";
import layoutStyles from "~/styles/layout";

const RouteError: React.FC = () => {
  return (
    <div className={layoutStyles.layout.base}>
      <div className={layoutStyles.container.wrapper}>
        <div className={layoutStyles.container.content}>
          <div className={layoutStyles.body.base}>
            <CRouteError />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteError;
