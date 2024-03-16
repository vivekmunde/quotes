import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/ui/skeleton";
import layoutStyles from "~/styles/layout";

const RouteLoading: React.FC = () => {
  return (
    <div className={layoutStyles.container.wrapper}>
      <div
        className={[
          layoutStyles.container.content,
          layoutStyles.body.base,
        ].join(" ")}
      >
        <section>
          <header
            className={[
              layoutStyles.screen.header.base,
              "flex-1 md:flex flex-row justify-between gap-10",
            ].join(" ")}
          >
            <Layout.Screen.Title className="flex-1">Quotes</Layout.Screen.Title>
            <Skeleton className="h-10 w-[60%] mb-4" />
          </header>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((it) => {
              return (
                <div key={it}>
                  <Skeleton style={{ height: "2rem" }} />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RouteLoading;
