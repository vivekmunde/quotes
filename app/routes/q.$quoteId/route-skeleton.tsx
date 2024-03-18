import React from "react";
import Layout from "~/components/layout";
import { Loading as QuoteLoading } from "~/components/quote";
import layoutStyles from "~/styles/layout";

const RouteSkeleton: React.FC = () => {
  return (
    <div className={layoutStyles.layout.base}>
      <div className={layoutStyles.container.wrapper}>
        <div className={layoutStyles.container.content}>
          <Layout.Header />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className={layoutStyles.container.wrapper}>
          <div className={layoutStyles.container.content}>
            <div className={layoutStyles.body.base}>
              <QuoteLoading />
            </div>
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
    </div>
  );
};

export default RouteSkeleton;
