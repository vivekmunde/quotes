import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";

export const ErrorBoundary = RouteError;

export const loader = routeLoader;

export default function Route() {
  return <RouteContent />;
}
