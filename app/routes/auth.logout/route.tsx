import { useLoaderData } from "@remix-run/react";
import RouteError from "~/components/route-error";
import routeAction from "./route-action.server";
import routeLoader from "./route-loader.server";
import RouteSkeleton from "./route-skeleton";

export const ErrorBoundary = RouteError;

export const action = routeAction;

export const loader = routeLoader;

export default function Route() {
  useLoaderData<typeof loader>();

  return <RouteSkeleton />;
}
