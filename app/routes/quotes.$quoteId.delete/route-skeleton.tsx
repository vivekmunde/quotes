import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/ui/skeleton";
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
            Delete quote
          </Layout.Screen.Title>
        </header>
        <div>
          <Skeleton className="h-32 mb-6" />
          <Skeleton className="h-6 mb-2" />
          <Skeleton className="h-6 mb-8" />
          <Skeleton className="h-24 mb-6" />
          <Skeleton className="h-12 w-24" />
        </div>
      </section>
    </div>
  </div>
);

export default RouteSkeleton;
