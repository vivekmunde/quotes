import React from "react";
import CommonRouteError from "~/components/route-error";
import layoutStyles from "~/styles/layout";
import Header from "./components/header";

const RouteError: React.FC = () => {
  return (
    <div className={layoutStyles.layout.base}>
      <Header />
      <div className={layoutStyles.container.wrapper}>
        <div className={layoutStyles.container.content}>
          <div className={layoutStyles.body.base}>
            <CommonRouteError />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteError;
