import withDecideRouteType from "~/components/route/with-decide-route-type";
import withRouteAction from "~/components/route/with-route-action";
import { decideLoaderType } from "~/utils/route";
import routeAction from "./route-action.server";
import routeDefault, { loader as defaultLoader } from "./route-default";
import routeDeferred, { loader as deferredLoader } from "./route-deferred";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export const action = routeAction;

export const loader = decideLoaderType(defaultLoader, deferredLoader);

export default withRouteAction(
  withDecideRouteType(routeDefault, routeDeferred),
  action
);
