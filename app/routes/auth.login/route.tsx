import { useLoaderData } from "@remix-run/react";
import RouteContainer from "~/components/route-container";
import routeAction from "./route-action.server";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";
import routeMeta from "./route-meta";

export const meta = routeMeta;

export const ErrorBoundary = RouteError;

export const loader = routeLoader;

export const action = routeAction;

export function shouldRevalidate() {
  return false;
}

export default function Route() {
  const data = useLoaderData<typeof loader>();

  return (
    <RouteContainer>
      <RouteContent quote={data.item} />
    </RouteContainer>
  );
}
