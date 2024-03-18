import { useLoaderData } from "@remix-run/react";
import RouteError from "~/components/route-error";
import routeAction from "./route-action.server";
import routeLoader from "./route-loader.server";
import routeMeta from "./route-meta";
import RouteSkeleton from "./route-skeleton";

export const meta = routeMeta;

export const ErrorBoundary = RouteError;

export const action = routeAction;

export const loader = routeLoader;

export default function Route() {
  useLoaderData<typeof loader>();

  return <RouteSkeleton />;
}
