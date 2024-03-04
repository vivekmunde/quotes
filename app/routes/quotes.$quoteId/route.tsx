import withDecideRouteType from "~/components/route/with-decide-route-type";
import { decideLoaderType } from "~/utils/route";
import RouteDefault, {
  ErrorBoundary as DefaultErrorBoundary,
  loader as defaultLoader,
} from "./route-default";
import RouteDeferred, {
  ErrorBoundary as DeferredErrorBoundary,
  loader as deferredLoader,
} from "./route-deferred";

export const ErrorBoundary = withDecideRouteType(
  DefaultErrorBoundary,
  DeferredErrorBoundary
);

export const loader = decideLoaderType(defaultLoader, deferredLoader);

export default withDecideRouteType(RouteDefault, RouteDeferred);
