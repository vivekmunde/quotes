import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import RouteError from "~/components/route-error/default-route-error";
import routeLoader from "./route-loader.server";
import RouteSkeleton from "./route-skeleton";

export const meta: MetaFunction = () => {
  return [
    { title: "Quotes" },
    { name: "Quotes", content: "Welcome to Quotes!" },
  ];
};

export const ErrorBoundary = RouteError;

export const loader = routeLoader;

export default function Route() {
  useLoaderData<typeof loader>();

  return <RouteSkeleton />;
}
