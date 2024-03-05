import withDecideRouteType from "~/components/route/with-decide-route-type";
import withRouteAction from "~/components/route/with-route-action";
import { decideLoaderType } from "~/utils/route";
import routeAction from "./route-action.server";
import RouteDefault, { loader as defaultLoader } from "./route-default";
import RouteDeferred, { loader as deferredLoader } from "./route-deferred";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export const loader = decideLoaderType(defaultLoader, deferredLoader);

export const action = routeAction;

export default withRouteAction(
  withDecideRouteType(RouteDefault, RouteDeferred),
  action
);
