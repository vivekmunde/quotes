import RouteDefault, { loader as defaultLoader } from "./route-default";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export const loader = defaultLoader;

export default RouteDefault;
