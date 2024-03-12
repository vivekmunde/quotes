import React from "react";
import Layout from "~/components/layout";
import { Skeleton } from "~/components/ui/skeleton";

const RouteLoading: React.FC = () => {
  return (
    <Layout.Screen.Body>
      <section>
        <Layout>
          <Layout.Header>
            <header className="flex-1 flex flex-row justify-between gap-6">
              <Layout.Header.Title className="flex-1">
                Quotes
              </Layout.Header.Title>
              <Skeleton className="h-10 w-[50%] mb-4" />
            </header>
          </Layout.Header>
          <Layout.Body>
            <div className="flex flex-col gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((it) => {
                return (
                  <div key={it}>
                    <Skeleton style={{ height: "2rem" }} />
                  </div>
                );
              })}
            </div>
          </Layout.Body>
        </Layout>
      </section>
    </Layout.Screen.Body>
  );
};

export default RouteLoading;
