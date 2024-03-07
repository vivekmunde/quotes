import { useLoaderData } from "@remix-run/react";
import routeAction from "./route-action.server";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";
import { TData } from "./types";

export const ErrorBoundary = RouteError;

export const action = routeAction;

export const loader = routeLoader;

export default function Route() {
  const data = useLoaderData<typeof loader>();

  return <RouteContent data={data as TData} />;
}
