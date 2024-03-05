import withDecideRouteType from "~/components/route/with-decide-route-type";
import { decideLoaderType } from "~/utils/route";
import RouteDefault, { loader as defaultLoader } from "./route-default";
import RouteDeferred, { loader as deferredLoader } from "./route-deferred";
import RouteError from "./route-error";

export const ErrorBoundary = RouteError;

export const loader = decideLoaderType(defaultLoader, deferredLoader);

export default withDecideRouteType(RouteDefault, RouteDeferred);
