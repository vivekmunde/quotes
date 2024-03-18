import { useLoaderData } from "@remix-run/react";
import RouteContainer from "~/components/route-container";
import { TMayBe } from "~/types";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";
import routeMeta from "./route-meta";
import { TQuote } from "./types";

export const meta = routeMeta;

export const ErrorBoundary = RouteError;

export const loader = routeLoader;

export default function Route() {
  const data = useLoaderData<typeof loader>();

  return (
    <RouteContainer>
      <RouteContent quote={data.item as TMayBe<TQuote>} />
    </RouteContainer>
  );
}
