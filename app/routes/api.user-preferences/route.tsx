import routeAction from "./route-action.server";
import RouteError from "./route-error";
import routeMeta from "./route-meta";

export const meta = routeMeta;

export const ErrorBoundary = RouteError;

export const action = routeAction;
