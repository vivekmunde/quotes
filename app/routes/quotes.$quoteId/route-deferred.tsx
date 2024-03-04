import withDeferredRouteData from "~/components/route/with-deferred-reoute-data";
import { deferredLoader } from "~/utils/route";
import RouteContent from "./route-content";
import RouteError from "./route-error";
import routeLoader from "./route-loader.server";
import RouteSkeleton from "./route-skeleton";

export const ErrorBoundary = RouteError;

export const loader = deferredLoader(routeLoader);

export default withDeferredRouteData(
  RouteContent,
  RouteSkeleton,
  RouteError,
  loader
);
