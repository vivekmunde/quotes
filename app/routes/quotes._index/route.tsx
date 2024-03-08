import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import RouteContainer from "~/components/route-container";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";
import RouteSkeleton from "./route-skeleton";
import { TQuote } from "./types";

export const ErrorBoundary = RouteError;

export const loader = routeLoader;

export default function Route() {
  const response = useLoaderData<typeof loader>();

  return (
    <RouteContainer>
      <Suspense fallback={<RouteSkeleton />}>
        <Await resolve={response.total}>
          {(total) => (
            <Suspense fallback={<RouteSkeleton />}>
              <Await resolve={response.items}>
                {(items) => (
                  <RouteContent
                    items={(items ?? []) as TQuote[]}
                    total={total ?? 0}
                    page={response.page ?? 0}
                    size={response.size ?? 10}
                  />
                )}
              </Await>
            </Suspense>
          )}
        </Await>
      </Suspense>
    </RouteContainer>
  );
}
