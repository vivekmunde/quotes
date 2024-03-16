import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/quote-form";
import layoutStyles from "~/styles/layout";

const RouteSkeleton: React.FC = () => (
  <div className={layoutStyles.container.wrapper}>
    <div
      className={[layoutStyles.container.content, layoutStyles.body.base].join(
        " "
      )}
    >
      <section>
        <header className={layoutStyles.screen.header.base}>
          <Layout.Screen.Title className={layoutStyles.screen.title.base}>
            Update quote
          </Layout.Screen.Title>
        </header>
        <div>
          <Skeleton />
        </div>
      </section>
    </div>
  </div>
);

export default RouteSkeleton;
