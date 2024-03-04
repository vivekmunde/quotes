import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import RouteError from "~/components/route-error/default-route-error";
import RouteContent from "./route-content";
import routeLoader from "./route-loader.server";
import RouteSkeleton from "./route-skeleton";

export const ErrorBoundary = RouteError;

export const loader = routeLoader;

export default function Route() {
  const { dataPromise } = useLoaderData<typeof loader>();

  return (
    <Suspense fallback={<RouteSkeleton />}>
      <Await resolve={dataPromise}>
        {(data) => <RouteContent data={data} />}
      </Await>
    </Suspense>
  );
}
