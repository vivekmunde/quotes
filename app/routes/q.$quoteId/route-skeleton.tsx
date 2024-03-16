import React from "react";
import { Loading as QuoteLoading } from "~/components/quote";
import layoutStyles from "~/styles/layout";

const RouteSkeleton: React.FC = () => {
  return (
    <React.Fragment>
      <div className={layoutStyles.container.wrapper}>
        <div className={layoutStyles.container.content}>
          <div
            className={[
              layoutStyles.body.base,
              "flex flex-col justify-center",
            ].join(" ")}
          >
            <QuoteLoading />
          </div>
        </div>
      </div>
      <div className={layoutStyles.container.wrapper}>
        <div className={layoutStyles.container.content}>
          <div
            className={[
              layoutStyles.body.base,
              "flex flex-col justify-end",
            ].join(" ")}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RouteSkeleton;
